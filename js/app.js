// Main App Controller
class DuoApp {
    constructor() {
        this.init();
    }

    init() {
        this.updateTopBar();
        this.renderPath();
        this.initEventListeners();

        // Listen for storage changes
        window.addEventListener('duo_state_changed', () => {
            this.updateTopBar();
            this.renderPath();
        });
    }

    updateTopBar() {
        const data = window.duoStorage.data;
        document.getElementById('stat-streak').textContent = `${data.streak}`;
        document.getElementById('stat-gems').textContent = `${data.gems}`;
        document.getElementById('stat-hearts').textContent = `${data.hearts}`;
        document.getElementById('stat-xp').textContent = `${data.dailyXP} / ${data.dailyGoal} XP`;

        const soundBtn = document.getElementById('btn-sound-toggle');
        if (soundBtn) {
            soundBtn.textContent = window.soundFX.isMuted() ? '🔇' : '🔊';
        }
    }

    renderPath() {
        const container = document.getElementById('learning-path-container');
        if (!container) return;

        const units = window.CourseManager.getAllUnits();
        let html = '';

        units.forEach((unit, uIdx) => {
            const lessonsHtml = unit.lessons.map((lesson, lIdx) => {
                const isCompleted = window.duoStorage.isLessonCompleted(lesson.id);
                // Can start if previous is completed or it's the first lesson
                const isFirst = (uIdx === 0 && lIdx === 0);
                const prevLesson = lIdx > 0 ? unit.lessons[lIdx - 1] : (uIdx > 0 ? units[uIdx - 1].lessons.slice(-1)[0] : null);
                const isUnlocked = isFirst || !prevLesson || window.duoStorage.isLessonCompleted(prevLesson.id);

                // Alternating zigzag offset for authentic Duolingo curve
                const offsetPattern = [0, 45, 65, 30, -35, -55, -25];
                const xOffset = offsetPattern[lIdx % offsetPattern.length];

                let statusClass = 'locked';
                let iconContent = lesson.icon || '⭐';

                if (isCompleted) {
                    statusClass = 'completed';
                    iconContent = '👑';
                } else if (isUnlocked) {
                    statusClass = 'active';
                }

                return `
                <div class="lesson-node-wrapper" style="transform: translateX(${xOffset}px);">
                    <button class="lesson-circle ${statusClass}" data-lesson-id="${lesson.id}" title="${lesson.title}">
                        <span class="lesson-circle-icon">${iconContent}</span>
                        ${statusClass === 'active' ? '<span class="pulse-ring"></span>' : ''}
                    </button>
                    <div class="lesson-label">${lesson.title}</div>
                </div>
                `;
            }).join('');

            const deleteBtnHtml = unit.isCustom ? `
                <button class="unit-delete-btn" data-unit-id="${unit.id}" title="Usuń ten zestaw">🗑️ Usuń</button>
            ` : '';

            html += `
            <div class="unit-block" style="--unit-theme: ${unit.color}; --unit-accent: ${unit.accentColor};">
                <div class="unit-banner">
                    <div class="unit-info">
                        <span class="unit-badge">DZIAŁ ${uIdx + 1}</span>
                        <h2 class="unit-title">${unit.title}</h2>
                        <p class="unit-desc">${unit.description}</p>
                    </div>
                    ${deleteBtnHtml}
                </div>
                <div class="unit-path-nodes">
                    ${lessonsHtml}
                </div>
            </div>
            `;
        });

        container.innerHTML = html;

        // Attach event listeners to lesson buttons
        container.querySelectorAll('.lesson-circle').forEach(btn => {
            btn.addEventListener('click', () => {
                const lessonId = btn.dataset.lessonId;
                const found = window.CourseManager.findLesson(lessonId);
                if (found) {
                    window.soundFX.playClick();
                    window.lessonEngine.startLesson(found.lesson);
                }
            });
        });

        // Delete custom units
        container.querySelectorAll('.unit-delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm('Czy na pewno chcesz usunąć ten własny zestaw lekcji?')) {
                    window.duoStorage.deleteCustomUnit(btn.dataset.unitId);
                }
            });
        });
    }

    initEventListeners() {
        // Sound toggle
        document.getElementById('btn-sound-toggle')?.addEventListener('click', () => {
            const muted = window.soundFX.toggleMute();
            document.getElementById('btn-sound-toggle').textContent = muted ? '🔇' : '🔊';
        });

        // Hearts refill / practice
        document.getElementById('stat-hearts-box')?.addEventListener('click', () => {
            if (confirm('Zregenerować wszystkie serduszka (5/5)?')) {
                window.duoStorage.refillHearts();
                window.soundFX.playWin();
            }
        });

        // Summary return button
        document.getElementById('btn-summary-continue')?.addEventListener('click', () => {
            document.getElementById('view-summary').classList.add('hidden');
            document.getElementById('view-path').classList.remove('hidden');
            window.soundFX.playClick();
        });

        // Return home on logo click
        document.getElementById('nav-logo')?.addEventListener('click', () => {
            document.getElementById('view-lesson').classList.add('hidden');
            document.getElementById('view-summary').classList.add('hidden');
            document.getElementById('view-path').classList.remove('hidden');
        });

        // Custom creator modal open/close
        const modal = document.getElementById('modal-custom');
        const openBtn = document.getElementById('btn-open-creator');
        const closeBtn = document.getElementById('btn-close-modal');
        const saveBtn = document.getElementById('btn-save-custom');

        openBtn?.addEventListener('click', () => {
            modal.classList.remove('hidden');
            window.soundFX.playClick();
        });

        closeBtn?.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        modal?.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });

        // Save custom unit
        saveBtn?.addEventListener('click', () => {
            const title = document.getElementById('custom-title').value.trim() || 'Mój własny zestaw';
            const desc = document.getElementById('custom-desc').value.trim() || 'Dodany z własnego materiału';
            const content = document.getElementById('custom-content').value.trim();

            if (!content) {
                alert('Wklej najpierw materiał do nauki!');
                return;
            }

            try {
                const newUnit = window.CourseManager.parseUserTextToUnit(content, title, desc);
                window.duoStorage.saveCustomUnit(newUnit);
                modal.classList.add('hidden');
                window.soundFX.playWin();
                alert(`🎉 Sukces! Zestaw "${newUnit.title}" został utworzony i dodany do Twojej ścieżki!`);
                // Clear fields
                document.getElementById('custom-title').value = '';
                document.getElementById('custom-desc').value = '';
                document.getElementById('custom-content').value = '';
            } catch (err) {
                alert('Błąd podczas przetwarzania materiału: ' + err.message);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.duoApp = new DuoApp();
});
