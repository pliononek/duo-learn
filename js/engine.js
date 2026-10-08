// Lesson Execution Engine
class LessonEngine {
    constructor() {
        this.currentLesson = null;
        this.queue = [];
        this.totalInitialQuestions = 0;
        this.completedCount = 0;
        this.currentQuestion = null;
        this.userAnswer = null;
        this.isEvaluated = false;
        this.mistakesCount = 0;
        this.selectedPairs = [];
        this.matchedPairsCount = 0;

        this.initEventListeners();
    }

    startLesson(lesson) {
        this.currentLesson = lesson;
        // Deep clone questions
        this.queue = JSON.parse(JSON.stringify(lesson.questions));
        this.totalInitialQuestions = this.queue.length;
        this.completedCount = 0;
        this.mistakesCount = 0;
        this.isEvaluated = false;
        this.userAnswer = null;

        // Switch to lesson view
        document.getElementById('view-path').classList.add('hidden');
        document.getElementById('view-summary').classList.add('hidden');
        document.getElementById('view-lesson').classList.remove('hidden');

        const heartsBadge = document.getElementById('lesson-hearts-val');
        if (heartsBadge) {
            heartsBadge.textContent = window.duoStorage.data.hearts;
        }

        this.updateProgressBar();
        this.renderNextQuestion();
    }

    renderNextQuestion() {
        if (this.queue.length === 0) {
            this.finishLesson();
            return;
        }

        this.isEvaluated = false;
        this.userAnswer = null;
        this.selectedPairs = [];
        this.matchedPairsCount = 0;
        this.currentQuestion = this.queue.shift();

        // Reset bottom sheet
        const dock = document.getElementById('lesson-bottom-dock');
        dock.className = 'dock-container state-idle';
        dock.innerHTML = `
            <div class="dock-content">
                <button id="btn-check" class="duo-btn duo-btn-primary" disabled>SPRAWDŹ</button>
            </div>
        `;
        document.getElementById('btn-check').addEventListener('click', () => this.handleActionClick());

        // Update mascot
        window.Mascot.render('lesson-mascot', 'happy', 95);

        // Render question container
        const stage = document.getElementById('question-stage');
        stage.innerHTML = '';

        switch (this.currentQuestion.type) {
            case 'multiple_choice':
                this.renderMultipleChoice(stage);
                break;
            case 'word_bank':
                this.renderWordBank(stage);
                break;
            case 'match_pairs':
                this.renderMatchPairs(stage);
                break;
            case 'type_in':
                this.renderTypeIn(stage);
                break;
            case 'listen':
                this.renderListen(stage);
                break;
            default:
                this.renderMultipleChoice(stage);
                break;
        }
    }

    updateProgressBar() {
        const total = Math.max(this.totalInitialQuestions, 1);
        const percent = Math.min(100, Math.round((this.completedCount / total) * 100));
        const bar = document.getElementById('lesson-progress-fill');
        if (bar) {
            bar.style.width = `${percent}%`;
        }
    }

    speak(text, lang = 'en-US') {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    }

    enableCheckButton(enable = true) {
        const btn = document.getElementById('btn-check');
        if (btn && !this.isEvaluated) {
            btn.disabled = !enable;
        }
    }

    // --- Renderers ---

    renderMultipleChoice(container) {
        const q = this.currentQuestion;
        let audioBtnHtml = '';
        if (q.audioPrompt) {
            audioBtnHtml = `
                <button class="speaker-bubble-btn" id="btn-speak-prompt" title="Odsłuchaj wymowę">
                    🔊
                </button>
            `;
        }

        let optionsHtml = q.options.map((opt, i) => `
            <button class="choice-card" data-index="${i}">
                <span class="choice-index">${i + 1}</span>
                <span class="choice-text">${opt}</span>
            </button>
        `).join('');

        container.innerHTML = `
            <div class="question-header">
                ${audioBtnHtml}
                <h2 class="question-title">${q.prompt}</h2>
            </div>
            <div class="choices-grid">
                ${optionsHtml}
            </div>
        `;

        if (q.audioPrompt) {
            document.getElementById('btn-speak-prompt')?.addEventListener('click', () => {
                this.speak(q.audioPrompt, q.lang || 'en-US');
            });
            // Auto-speak on question load
            setTimeout(() => this.speak(q.audioPrompt, q.lang || 'en-US'), 150);
        }

        const cards = container.querySelectorAll('.choice-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                if (this.isEvaluated) return;
                window.soundFX.playClick();
                cards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.userAnswer = parseInt(card.dataset.index, 10);
                this.enableCheckButton(true);
            });
        });
    }

    renderWordBank(container) {
        const q = this.currentQuestion;
        const allTokens = [...q.tokens, ...(q.distractors || [])].sort(() => 0.5 - Math.random());

        let audioBtnHtml = '';
        if (q.audioPrompt) {
            audioBtnHtml = `
                <button class="speaker-bubble-btn" id="btn-speak-prompt" title="Odsłuchaj wymowę">
                    🔊
                </button>
            `;
        }

        container.innerHTML = `
            <div class="question-header">
                ${audioBtnHtml}
                <h2 class="question-title">${q.prompt}</h2>
            </div>
            <div class="word-bank-sentence-slot" id="sentence-slot">
                <span class="slot-placeholder">Kliknij słowa poniżej, aby ułożyć odpowiedź...</span>
            </div>
            <div class="word-bank-pool" id="word-pool">
                ${allTokens.map((t, idx) => `
                    <button class="word-tile" data-token-id="${idx}" data-token="${t}">${t}</button>
                `).join('')}
            </div>
        `;

        if (q.audioPrompt) {
            document.getElementById('btn-speak-prompt')?.addEventListener('click', () => {
                this.speak(q.audioPrompt, q.lang || 'en-US');
            });
            setTimeout(() => this.speak(q.audioPrompt, q.lang || 'en-US'), 150);
        }

        const sentenceSlot = container.querySelector('#sentence-slot');
        const pool = container.querySelector('#word-pool');
        const selectedTiles = [];

        pool.querySelectorAll('.word-tile').forEach(tile => {
            tile.addEventListener('click', () => {
                if (this.isEvaluated || tile.classList.contains('used')) return;
                window.soundFX.playTileSelect();
                tile.classList.add('used');

                const wordText = tile.dataset.token;
                const tokenObj = { id: tile.dataset.tokenId, text: wordText };
                selectedTiles.push(tokenObj);

                this.renderSentenceTokens(sentenceSlot, selectedTiles, pool);
                this.userAnswer = selectedTiles.map(t => t.text).join(' ');
                this.enableCheckButton(selectedTiles.length > 0);
            });
        });
    }

    renderSentenceTokens(slot, selectedTiles, pool) {
        if (selectedTiles.length === 0) {
            slot.innerHTML = `<span class="slot-placeholder">Kliknij słowa poniżej, aby ułożyć odpowiedź...</span>`;
            return;
        }

        slot.innerHTML = selectedTiles.map((t, i) => `
            <button class="word-tile placed" data-placed-idx="${i}">${t.text}</button>
        `).join('');

        slot.querySelectorAll('.word-tile.placed').forEach(placedTile => {
            placedTile.addEventListener('click', () => {
                if (this.isEvaluated) return;
                window.soundFX.playTileReturn();
                const idx = parseInt(placedTile.dataset.placedIdx, 10);
                const removed = selectedTiles.splice(idx, 1)[0];

                const origTile = pool.querySelector(`[data-token-id="${removed.id}"]`);
                if (origTile) origTile.classList.remove('used');

                this.renderSentenceTokens(slot, selectedTiles, pool);
                this.userAnswer = selectedTiles.map(t => t.text).join(' ');
                this.enableCheckButton(selectedTiles.length > 0);
            });
        });
    }

    renderMatchPairs(container) {
        const q = this.currentQuestion;
        const leftItems = q.pairs.map((p, i) => ({ text: p.left, id: i, side: 'left' }));
        const rightItems = q.pairs.map((p, i) => ({ text: p.right, id: i, side: 'right' }));

        const allItems = [...leftItems, ...rightItems].sort(() => 0.5 - Math.random());

        container.innerHTML = `
            <div class="question-header">
                <h2 class="question-title">${q.prompt}</h2>
            </div>
            <div class="pairs-grid">
                ${allItems.map((item, idx) => `
                    <button class="pair-card" data-idx="${idx}" data-side="${item.side}" data-pair-id="${item.id}">
                        ${item.text}
                    </button>
                `).join('')}
            </div>
        `;

        let selectedCards = [];
        const totalPairs = q.pairs.length;
        let matchedCount = 0;

        const cards = container.querySelectorAll('.pair-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                if (this.isEvaluated || card.classList.contains('matched')) return;

                window.soundFX.playClick();

                if (card.classList.contains('active-pair')) {
                    card.classList.remove('active-pair');
                    selectedCards = [];
                    return;
                }

                card.classList.add('active-pair');
                selectedCards.push(card);

                if (selectedCards.length === 2) {
                    const [first, second] = selectedCards;
                    if (first.dataset.pairId === second.dataset.pairId && first.dataset.side !== second.dataset.side) {
                        // Correct pair match!
                        window.soundFX.playTileSelect();
                        first.classList.remove('active-pair');
                        second.classList.remove('active-pair');
                        first.classList.add('matched');
                        second.classList.add('matched');
                        matchedCount++;

                        if (matchedCount === totalPairs) {
                            this.userAnswer = true;
                            this.enableCheckButton(true);
                            // Auto check when all pairs matched
                            setTimeout(() => this.evaluateAnswer(), 300);
                        }
                    } else {
                        // Wrong match
                        first.classList.add('wrong-pair');
                        second.classList.add('wrong-pair');
                        window.soundFX.playIncorrect();

                        setTimeout(() => {
                            first.classList.remove('active-pair', 'wrong-pair');
                            second.classList.remove('active-pair', 'wrong-pair');
                        }, 500);
                    }
                    selectedCards = [];
                }
            });
        });
    }

    renderTypeIn(container) {
        const q = this.currentQuestion;

        container.innerHTML = `
            <div class="question-header">
                <h2 class="question-title">${q.prompt}</h2>
                ${q.hint ? `<p class="question-hint">💡 Podpowiedź: ${q.hint}</p>` : ''}
            </div>
            <div class="type-in-container">
                <input type="text" id="type-in-input" class="duo-input" placeholder="Wpisz swoją odpowiedź..." autocomplete="off" autofocus />
            </div>
        `;

        const input = container.querySelector('#type-in-input');
        input.focus();

        input.addEventListener('input', () => {
            this.userAnswer = input.value.trim();
            this.enableCheckButton(this.userAnswer.length > 0);
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.handleActionClick();
            }
        });
    }

    renderListen(container) {
        const q = this.currentQuestion;

        container.innerHTML = `
            <div class="question-header">
                <h2 class="question-title">${q.prompt}</h2>
            </div>
            <div class="listen-bubble-center">
                <button class="big-listen-btn" id="btn-big-listen">
                    🔊 Posłuchaj nagrania
                </button>
            </div>
            <div class="choices-grid">
                ${q.options.map((opt, i) => `
                    <button class="choice-card" data-index="${i}">
                        <span class="choice-index">${i + 1}</span>
                        <span class="choice-text">${opt}</span>
                    </button>
                `).join('')}
            </div>
        `;

        const playBtn = container.querySelector('#btn-big-listen');
        playBtn.addEventListener('click', () => {
            this.speak(q.audioText, q.lang || 'en-US');
        });
        setTimeout(() => this.speak(q.audioText, q.lang || 'en-US'), 200);

        const cards = container.querySelectorAll('.choice-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                if (this.isEvaluated) return;
                window.soundFX.playClick();
                cards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.userAnswer = parseInt(card.dataset.index, 10);
                this.enableCheckButton(true);
            });
        });
    }

    // --- Action handling ---

    handleActionClick() {
        if (!this.isEvaluated) {
            this.evaluateAnswer();
        } else {
            this.renderNextQuestion();
        }
    }

    evaluateAnswer() {
        this.isEvaluated = true;
        const q = this.currentQuestion;
        let isCorrect = false;
        let solutionText = '';

        if (q.type === 'multiple_choice' || q.type === 'listen') {
            isCorrect = (this.userAnswer === q.correctIndex);
            solutionText = q.options[q.correctIndex];
        } else if (q.type === 'word_bank') {
            const cleanUser = (this.userAnswer || '').toLowerCase().replace(/[,.?!]/g, '').trim();
            const cleanTarget = (q.correctSentence || '').toLowerCase().replace(/[,.?!]/g, '').trim();
            isCorrect = (cleanUser === cleanTarget);
            solutionText = q.correctSentence;
        } else if (q.type === 'type_in') {
            const cleanUser = (this.userAnswer || '').toLowerCase().replace(/[,.?!]/g, '').trim();
            isCorrect = q.acceptedAnswers.some(ans => ans.toLowerCase().replace(/[,.?!]/g, '').trim() === cleanUser);
            solutionText = q.acceptedAnswers[0];
        } else if (q.type === 'match_pairs') {
            isCorrect = true;
            solutionText = 'Wszystkie pary połączone pomyślnie!';
        }

        const dock = document.getElementById('lesson-bottom-dock');

        if (isCorrect) {
            window.soundFX.playCorrect();
            window.Mascot.render('lesson-mascot', 'cheer', 95);
            this.completedCount++;
            this.updateProgressBar();

            dock.className = 'dock-container state-correct';
            dock.innerHTML = `
                <div class="dock-content">
                    <div class="feedback-badge">
                        <span class="feedback-icon">✓</span>
                        <div class="feedback-text">
                            <h3>Doskonale!</h3>
                            <p>Świetna robota, tak trzymaj!</p>
                        </div>
                    </div>
                    <button id="btn-next" class="duo-btn duo-btn-success">DALEJ (Enter)</button>
                </div>
            `;
        } else {
            window.soundFX.playIncorrect();
            window.Mascot.render('lesson-mascot', 'sad', 95);
            this.mistakesCount++;

            // Push this question back to the end of the queue to repeat!
            this.queue.push(q);

            const heartsLeft = window.duoStorage.loseHeart();
            const heartsBadge = document.getElementById('lesson-hearts-val');
            if (heartsBadge) {
                heartsBadge.textContent = heartsLeft;
            }

            dock.className = 'dock-container state-wrong';
            dock.innerHTML = `
                <div class="dock-content">
                    <div class="feedback-badge">
                        <span class="feedback-icon">✕</span>
                        <div class="feedback-text">
                            <h3>Poprawna odpowiedź:</h3>
                            <p class="correct-solution">${solutionText}</p>
                        </div>
                    </div>
                    <button id="btn-next" class="duo-btn duo-btn-danger">ROZUMIEM (Enter)</button>
                </div>
            `;

            if (heartsLeft <= 0) {
                setTimeout(() => {
                    alert('Skończyły Ci się serduszka! Zregenerowaliśmy je na potrzeby treningu.');
                    window.duoStorage.refillHearts();
                }, 300);
            }
        }

        document.getElementById('btn-next').addEventListener('click', () => {
            this.renderNextQuestion();
        });
    }

    finishLesson() {
        window.soundFX.playWin();
        const xpEarned = this.currentLesson.xp || 15;
        const result = window.duoStorage.recordLessonCompletion(this.currentLesson.id, xpEarned);

        // Hide lesson view, show summary
        document.getElementById('view-lesson').classList.add('hidden');
        document.getElementById('view-summary').classList.remove('hidden');

        window.Mascot.render('summary-mascot', 'win', 150);

        const accuracy = Math.max(0, Math.round(((this.totalInitialQuestions) / (this.totalInitialQuestions + this.mistakesCount)) * 100));

        document.getElementById('summary-xp').textContent = `+${xpEarned} XP`;
        document.getElementById('summary-accuracy').textContent = `${accuracy}%`;
        document.getElementById('summary-streak').textContent = `${result.streak} dni 🔥`;

        if (window.confetti) {
            window.confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }

    initEventListeners() {
        // Exit lesson button
        document.getElementById('btn-exit-lesson')?.addEventListener('click', () => {
            if (confirm('Czy na pewno chcesz przerwać lekcję? Twój postęp w tej sesji zostanie utracony.')) {
                document.getElementById('view-lesson').classList.add('hidden');
                document.getElementById('view-path').classList.remove('hidden');
            }
        });

        // Global keyboard shortcuts (1-4 for options, Enter for Continue)
        window.addEventListener('keydown', (e) => {
            const isLessonActive = !document.getElementById('view-lesson').classList.contains('hidden');
            if (!isLessonActive) return;

            if (e.key === 'Enter') {
                const btnCheck = document.getElementById('btn-check');
                const btnNext = document.getElementById('btn-next');
                if (btnNext) {
                    btnNext.click();
                } else if (btnCheck && !btnCheck.disabled) {
                    btnCheck.click();
                }
            } else if (['1', '2', '3', '4'].includes(e.key) && !this.isEvaluated) {
                const index = parseInt(e.key, 10) - 1;
                const card = document.querySelector(`.choice-card[data-index="${index}"]`);
                if (card) card.click();
            }
        });
    }
}

window.lessonEngine = new LessonEngine();
