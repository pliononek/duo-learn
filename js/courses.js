// Pełna baza materiałów do nauki: Język Niemiecki - Czas przeszły Perfekt & Gramatyka
const GERMAN_COURSE_UNITS = [
    {
        id: 'unit-ger-1',
        title: 'Dział 1: Odmiana haben, sein & Zaimki pytające',
        description: 'Fundamenty czasu teraźniejszego i pytania (wer, was, wo, wohin...)',
        color: '#58cc02',
        accentColor: '#46a302',
        lessons: [
            {
                id: 'ger-lesson-1-haben-sein',
                title: 'Odmiana czasowników haben i sein',
                icon: '⚡',
                description: 'Kluczowe czasowniki posiłkowe w czasie teraźniejszym (Präsens).',
                xp: 20,
                questions: [
                    {
                        type: 'match_pairs',
                        prompt: 'Połącz formy czasownika "haben" (mieć) z osobami',
                        pairs: [
                            { left: 'ich', right: 'habe' },
                            { left: 'du', right: 'hast' },
                            { left: 'er / sie / es', right: 'hat' },
                            { left: 'wir / sie / Sie', right: 'haben' }
                        ]
                    },
                    {
                        type: 'match_pairs',
                        prompt: 'Połącz formy czasownika "sein" (być) z osobami',
                        pairs: [
                            { left: 'ich', right: 'bin' },
                            { left: 'du', right: 'bist' },
                            { left: 'er / sie / es', right: 'ist' },
                            { left: 'ihr', right: 'seid' }
                        ]
                    },
                    {
                        type: 'multiple_choice',
                        prompt: 'Wybierz poprawną formę: "Ihr ______ ein schönes Haus."',
                        audioPrompt: 'Ihr habt ein schönes Haus.',
                        lang: 'de-DE',
                        options: ['habt', 'hat', 'haben', 'hast'],
                        correctIndex: 0
                    },
                    {
                        type: 'multiple_choice',
                        prompt: 'Wybierz poprawną formę: "Wir ______ heute sehr müde."',
                        audioPrompt: 'Wir sind heute sehr müde.',
                        lang: 'de-DE',
                        options: ['sind', 'seid', 'ist', 'bin'],
                        correctIndex: 0
                    },
                    {
                        type: 'type_in',
                        prompt: 'Wpisz formę czasownika sein dla "er/sie/es":',
                        acceptedAnswers: ['ist'],
                        hint: '3 litery, zaczyna się na i...'
                    },
                    {
                        type: 'type_in',
                        prompt: 'Wpisz formę czasownika haben dla "du":',
                        acceptedAnswers: ['hast'],
                        hint: 'du h_ _ t'
                    }
                ]
            },
            {
                id: 'ger-lesson-2-frageworter',
                title: 'Zaimki pytające (Fragewörter)',
                icon: '❓',
                description: 'Naucz się pytać: kto, co, gdzie, dokąd, kiedy, dlaczego...',
                xp: 20,
                questions: [
                    {
                        type: 'match_pairs',
                        prompt: 'Połącz niemieckie zaimki pytające z polskimi',
                        pairs: [
                            { left: 'Kto?', right: 'Wer?' },
                            { left: 'Co?', right: 'Was?' },
                            { left: 'Jak?', right: 'Wie?' },
                            { left: 'Dlaczego?', right: 'Warum?' }
                        ]
                    },
                    {
                        type: 'match_pairs',
                        prompt: 'Połącz zaimki miejsca i czasu',
                        pairs: [
                            { left: 'Gdzie?', right: 'Wo?' },
                            { left: 'Dokąd?', right: 'Wohin?' },
                            { left: 'Kiedy?', right: 'Wann?' },
                            { left: 'Z kim?', right: 'Mit wem?' }
                        ]
                    },
                    {
                        type: 'multiple_choice',
                        prompt: 'Jak po niemiecku zapytasz "Komu?" (Dativ)?',
                        audioPrompt: 'Wem?',
                        lang: 'de-DE',
                        options: ['Wem?', 'Wen?', 'Wer?', 'Wo?'],
                        correctIndex: 0
                    },
                    {
                        type: 'multiple_choice',
                        prompt: 'Jak po niemiecku zapytasz "Kogo?" (Akkusativ)?',
                        audioPrompt: 'Wen?',
                        lang: 'de-DE',
                        options: ['Wen?', 'Wem?', 'Wie?', 'Was?'],
                        correctIndex: 0
                    },
                    {
                        type: 'type_in',
                        prompt: 'Wpisz zaimek pytający oznaczający "Dlaczego?":',
                        acceptedAnswers: ['warum'],
                        hint: 'Zaczyna się na W...'
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Ułóż pytanie: "Dokąd idziesz dzisiaj?"',
                        audioPrompt: 'Wohin gehst du heute?',
                        lang: 'de-DE',
                        tokens: ['Wohin', 'gehst', 'du', 'heute?'],
                        distractors: ['Wo', 'ist', 'Wer'],
                        correctSentence: 'Wohin gehst du heute?'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-ger-2',
        title: 'Dział 2: Schemat Perfekt & Tworzenie Partizip II',
        description: 'Zasady tworzenia imiesłowu czasu przeszłego dla czasowników regularnych',
        color: '#1cb0f6',
        accentColor: '#1899d6',
        lessons: [
            {
                id: 'ger-lesson-3-partizip-regularne',
                title: 'Standardowe czasowniki: ge- + temat + -t',
                icon: '🧩',
                description: 'machen -> gemacht, tanzen -> getanzt, lernen -> gelernt...',
                xp: 25,
                questions: [
                    {
                        type: 'multiple_choice',
                        prompt: 'Jaki jest schemat tworzenia Partizip II dla regularnych czasowników?',
                        options: [
                            'ge- + temat czasownika + -t',
                            'be- + temat czasownika + -en',
                            'temat czasownika + -ieren',
                            'ge- + bezokolicznik'
                        ],
                        correctIndex: 0
                    },
                    {
                        type: 'match_pairs',
                        prompt: 'Połącz bezokolicznik z poprawną formą Partizip II',
                        pairs: [
                            { left: 'machen (robić)', right: 'gemacht' },
                            { left: 'tanzen (tańczyć)', right: 'getanzt' },
                            { left: 'lernen (uczyć się)', right: 'gelernt' },
                            { left: 'hören (słuchać)', right: 'gehört' }
                        ]
                    },
                    {
                        type: 'match_pairs',
                        prompt: 'Dopasuj kolejne formy czasu przeszłego',
                        pairs: [
                            { left: 'kochen (gotować)', right: 'gekocht' },
                            { left: 'kaufen (kupować)', right: 'gekauft' },
                            { left: 'lachen (śmiać się)', right: 'gelacht' },
                            { left: 'suchen (szukać)', right: 'gesucht' }
                        ]
                    },
                    {
                        type: 'match_pairs',
                        prompt: 'Dopasuj czasowniki z karty pracy',
                        pairs: [
                            { left: 'duschen (brać prysznic)', right: 'geduscht' },
                            { left: 'putzen (czyścić)', right: 'geputzt' },
                            { left: 'lieben (kochać)', right: 'geliebt' },
                            { left: 'weinen (płakać)', right: 'geweint' }
                        ]
                    },
                    {
                        type: 'type_in',
                        prompt: 'Utwórz Partizip II od czasownika "malen" (malować):',
                        acceptedAnswers: ['gemalt'],
                        hint: 'ge + mal + t'
                    },
                    {
                        type: 'type_in',
                        prompt: 'Utwórz Partizip II od czasownika "wohnen" (mieszkać):',
                        acceptedAnswers: ['gewohnt'],
                        hint: 'ge + wohn + t'
                    }
                ]
            },
            {
                id: 'ger-lesson-4-wyjatki-partizip',
                title: 'Wyjątki: -et, -ieren, rozdzielne i nierozdzielne',
                icon: '🎯',
                description: 'arbeiten -> gearbeitet, studieren -> studiert, einkaufen -> eingekauft...',
                xp: 25,
                questions: [
                    {
                        type: 'multiple_choice',
                        prompt: 'Co dzieje się, gdy temat czasownika kończy się na -t, -d, -chn (np. arbeiten, warten)?',
                        options: [
                            'Otrzymuje końcówkę -et (np. gearbeitet, gewartet)',
                            'Otrzymuje końcówkę -st',
                            'Nie otrzymuje przedrostka ge-',
                            'Kończy się na -en'
                        ],
                        correctIndex: 0
                    },
                    {
                        type: 'match_pairs',
                        prompt: 'Połącz czasowniki z końcówką -et',
                        pairs: [
                            { left: 'arbeiten (pracować)', right: 'gearbeitet' },
                            { left: 'warten (czekać)', right: 'gewartet' },
                            { left: 'zeichnen (rysować)', right: 'gezeichnet' },
                            { left: 'baden (kąpać się)', right: 'gebadet' }
                        ]
                    },
                    {
                        type: 'multiple_choice',
                        prompt: 'Jak tworzymy Partizip II od czasowników zakończonych na -ieren (np. fotografieren)?',
                        options: [
                            'BEZ przedrostka ge-, z końcówką -t (np. fotografiert)',
                            'Z przedrostkiem ge- i końcówką -t',
                            'Zawsze z czasownikiem sein',
                            'Dodajemy -iert na początku'
                        ],
                        correctIndex: 0
                    },
                    {
                        type: 'match_pairs',
                        prompt: 'Dopasuj czasowniki na -ieren (bez "ge-")',
                        pairs: [
                            { left: 'studieren', right: 'studiert' },
                            { left: 'fotografieren', right: 'fotografiert' },
                            { left: 'organisieren', right: 'organisiert' },
                            { left: 'passieren (wydarzyć się)', right: 'passiert' }
                        ]
                    },
                    {
                        type: 'match_pairs',
                        prompt: 'Czasowniki nierozdzielne (be-, ver-, ge-): bez przedrostka ge-!',
                        pairs: [
                            { left: 'besuchen (odwiedzać)', right: 'besucht' },
                            { left: 'verkaufen (sprzedawać)', right: 'verkauft' },
                            { left: 'bestellen (zamawiać)', right: 'bestellt' },
                            { left: 'gehören (należeć)', right: 'gehört' }
                        ]
                    },
                    {
                        type: 'match_pairs',
                        prompt: 'Czasowniki rozdzielnie złożone (przedrostek + ge- + temat + -t)',
                        pairs: [
                            { left: 'aufmachen (otwierać)', right: 'aufgemacht' },
                            { left: 'einkaufen (robić zakupy)', right: 'eingekauft' },
                            { left: 'aufräumen (sprzątać)', right: 'aufgeräumt' }
                        ]
                    },
                    {
                        type: 'type_in',
                        prompt: 'Wpisz formę Partizip II dla "einkaufen":',
                        acceptedAnswers: ['eingekauft'],
                        hint: 'ein + ge + kauf + t'
                    }
                ]
            },
            {
                id: 'ger-lesson-5-schemat-zdania',
                title: 'Schemat zdania w Perfekt (haben + Partizip II)',
                icon: '📐',
                description: 'Czasownik posiłkowy na 2. miejscu, a Partizip II ZAWSZE na końcu zdania!',
                xp: 20,
                questions: [
                    {
                        type: 'multiple_choice',
                        prompt: 'Gdzie w zdaniu oznajmującym stoi imiesłów Partizip II (np. gespielt)?',
                        options: [
                            'Na samym końcu zdania',
                            'Na drugim miejscu',
                            'Na pierwszym miejscu',
                            'Zaraz po podmiocie'
                        ],
                        correctIndex: 0
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Ułóż po niemiecku: "Grałem w poniedziałek w tenisa."',
                        audioPrompt: 'Ich habe am Montag Tennis gespielt.',
                        lang: 'de-DE',
                        tokens: ['Ich', 'habe', 'am', 'Montag', 'Tennis', 'gespielt.'],
                        distractors: ['bist', 'spielte', 'hat'],
                        correctSentence: 'Ich habe am Montag Tennis gespielt.'
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Ułóż zdanie: "Graliśmy w ogrodzie."',
                        audioPrompt: 'Wir haben im Garten gespielt.',
                        lang: 'de-DE',
                        tokens: ['Wir', 'haben', 'im', 'Garten', 'gespielt.'],
                        distractors: ['sind', 'habt', 'spielen'],
                        correctSentence: 'Wir haben im Garten gespielt.'
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Ułóż zdanie z pytaniem: "Grała Pani w piłkę, Pani Dermat?"',
                        audioPrompt: 'Frau Dermat, haben Sie Ball gespielt?',
                        lang: 'de-DE',
                        tokens: ['Frau', 'Dermat,', 'haben', 'Sie', 'Ball', 'gespielt?'],
                        distractors: ['hat', 'bist', 'Tennis'],
                        correctSentence: 'Frau Dermat, haben Sie Ball gespielt?'
                    },
                    {
                        type: 'multiple_choice',
                        prompt: 'Uzupełnij: "Du ______ Fußball gespielt."',
                        audioPrompt: 'Du hast Fußball gespielt.',
                        lang: 'de-DE',
                        options: ['hast', 'habe', 'hat', 'haben'],
                        correctIndex: 0
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-ger-3',
        title: 'Dział 3: Trening z Kart Pracy (Zadania II & III)',
        description: 'Ćwiczenia zdań i zwrotów dokładnie z Twoich kart pracy i zdjęć!',
        color: '#ff9600',
        accentColor: '#e07e00',
        lessons: [
            {
                id: 'ger-lesson-6-karty-czesc-1',
                title: 'Zdania z Karty Pracy – Część 1',
                icon: '📝',
                description: 'Dyskoteka, zakupy, studia medyczne w Krakowie...',
                xp: 25,
                questions: [
                    {
                        type: 'word_bank',
                        prompt: 'Uzupełnij (Zad 1): "Tańczyłem w dyskotece."',
                        audioPrompt: 'Ich habe in der Disko getanzt.',
                        lang: 'de-DE',
                        tokens: ['Ich', 'habe', 'in', 'der', 'Disko', 'getanzt.'],
                        distractors: ['bin', 'getanzt', 'gehört'],
                        correctSentence: 'Ich habe in der Disko getanzt.'
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Uzupełnij (Zad 2): "Kupiłeś wszystko? Mleko, chleb, sok pomarańczowy i masło?"',
                        audioPrompt: 'Hast du alles eingekauft?',
                        lang: 'de-DE',
                        tokens: ['Hast', 'du', 'alles', 'eingekauft?'],
                        distractors: ['Haben', 'gekauft', 'bist'],
                        correctSentence: 'Hast du alles eingekauft?'
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Uzupełnij (Zad 3): "Moja siostra studiowała medycynę w Krakowie."',
                        audioPrompt: 'Meine Schwester hat Medizin in Krakau studiert.',
                        lang: 'de-DE',
                        tokens: ['Meine', 'Schwester', 'hat', 'Medizin', 'in', 'Krakau', 'studiert.'],
                        distractors: ['haben', 'gestudiert', 'ist'],
                        correctSentence: 'Meine Schwester hat Medizin in Krakau studiert.'
                    },
                    {
                        type: 'multiple_choice',
                        prompt: 'Zad 4: "Wer ______ die Party ______ ?" (Kto zorganizował imprezę?)',
                        options: [
                            'hat ... organisiert',
                            'haben ... georganisiert',
                            'ist ... organisiert',
                            'hat ... georganisiert'
                        ],
                        correctIndex: 0
                    },
                    {
                        type: 'multiple_choice',
                        prompt: 'Zad 5: "Thomas ______ Musik ______ ."',
                        options: [
                            'hat ... gehört',
                            'haben ... gehört',
                            'ist ... gehört',
                            'hat ... gehortet'
                        ],
                        correctIndex: 0
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Zad 6: "Moi rodzice sprzedali stare auto na OLX."',
                        audioPrompt: 'Meine Eltern haben das alte Auto auf OLX verkauft.',
                        lang: 'de-DE',
                        tokens: ['Meine', 'Eltern', 'haben', 'das', 'alte', 'Auto', 'auf', 'OLX', 'verkauft.'],
                        distractors: ['hat', 'geverkauft', 'sind'],
                        correctSentence: 'Meine Eltern haben das alte Auto auf OLX verkauft.'
                    }
                ]
            },
            {
                id: 'ger-lesson-7-karty-czesc-2',
                title: 'Zdania z Karty Pracy – Część 2',
                icon: '🏆',
                description: 'Portret Julii, czekanie, sprzątanie domu, praca w niedzielę...',
                xp: 30,
                questions: [
                    {
                        type: 'word_bank',
                        prompt: 'Zad 7: "Julia narysowała mój portret."',
                        audioPrompt: 'Julia hat mein Porträt gezeichnet.',
                        lang: 'de-DE',
                        tokens: ['Julia', 'hat', 'mein', 'Porträt', 'gezeichnet.'],
                        distractors: ['haben', 'gezeichnetet', 'ist'],
                        correctSentence: 'Julia hat mein Porträt gezeichnet.'
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Zad 8: "Jak długo na mnie czekaliście? 20 minut?"',
                        audioPrompt: 'Wie lange habt ihr auf mich gewartet?',
                        lang: 'de-DE',
                        tokens: ['Wie', 'lange', 'habt', 'ihr', 'auf', 'mich', 'gewartet?'],
                        distractors: ['hat', 'gewartet', 'haben'],
                        correctSentence: 'Wie lange habt ihr auf mich gewartet?'
                    },
                    {
                        type: 'multiple_choice',
                        prompt: 'Zad 9: "Er ______ zur polnischen Mannschaft ______ ."',
                        options: [
                            'hat ... gehört',
                            'ist ... gehört',
                            'haben ... gehört',
                            'hat ... gegehört'
                        ],
                        correctIndex: 0
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Zad 10: "Wczoraj posprzątaliśmy cały dom."',
                        audioPrompt: 'Wir haben gestern das ganze Haus aufgeräumt.',
                        lang: 'de-DE',
                        tokens: ['Wir', 'haben', 'gestern', 'das', 'ganze', 'Haus', 'aufgeräumt.'],
                        distractors: ['hat', 'geaufräumt', 'waren'],
                        correctSentence: 'Wir haben gestern das ganze Haus aufgeräumt.'
                    },
                    {
                        type: 'multiple_choice',
                        prompt: 'Zad 11: "Warum ______ dein Vater am Sonntag ______ ? Das ist doch ein freier Tag."',
                        options: [
                            'hat ... gearbeitet',
                            'haben ... gearbeitet',
                            'hat ... gearbeit',
                            'ist ... gearbeitet'
                        ],
                        correctIndex: 0
                    },
                    {
                        type: 'multiple_choice',
                        prompt: 'Zad 12: "______ ihr am Samstag die Oma ______ ?"',
                        options: [
                            'Habt ... besucht',
                            'Haben ... gebucht',
                            'Habt ... gebsucht',
                            'Seid ... besucht'
                        ],
                        correctIndex: 0
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Zad 13: "Wieczorem wziąłem szybko prysznic i przeczytałem książkę."',
                        audioPrompt: 'Am Abend habe ich schnell geduscht.',
                        lang: 'de-DE',
                        tokens: ['Am', 'Abend', 'habe', 'ich', 'schnell', 'geduscht.'],
                        distractors: ['hat', 'geduschet', 'bin'],
                        correctSentence: 'Am Abend habe ich schnell geduscht.'
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Zad 14: "Czy otworzyłeś już swój prezent urodzinowy?"',
                        audioPrompt: 'Hast du schon dein Geburtstagsgeschenk aufgemacht?',
                        lang: 'de-DE',
                        tokens: ['Hast', 'du', 'schon', 'dein', 'Geburtstagsgeschenk', 'aufgemacht?'],
                        distractors: ['Haben', 'geaufmacht', 'bist'],
                        correctSentence: 'Hast du schon dein Geburtstagsgeschenk aufgemacht?'
                    }
                ]
            }
        ]
    }
];

class CourseManager {
    static getAllUnits() {
        const customUnits = window.duoStorage ? window.duoStorage.getCustomUnits() : [];
        return [...customUnits, ...GERMAN_COURSE_UNITS];
    }

    static findLesson(lessonId) {
        const units = this.getAllUnits();
        for (const unit of units) {
            const found = unit.lessons.find(l => l.id === lessonId);
            if (found) return { unit, lesson: found };
        }
        return null;
    }

    static parseUserTextToUnit(rawText, title = 'Własny zestaw pytań', description = 'Zestaw dodany przez Ciebie') {
        const trimmed = rawText.trim();

        if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
            try {
                const parsed = JSON.parse(trimmed);
                if (Array.isArray(parsed)) {
                    return {
                        id: 'custom-' + Date.now(),
                        title: title,
                        description: description,
                        color: '#ff9600',
                        accentColor: '#e07e00',
                        lessons: [{
                            id: 'custom-lesson-' + Date.now(),
                            title: title,
                            icon: '⭐',
                            description: description,
                            xp: parsed.length * 5,
                            questions: parsed
                        }]
                    };
                }
                if (parsed.lessons) {
                    if (!parsed.id) parsed.id = 'custom-' + Date.now();
                    return parsed;
                }
            } catch (e) {}
        }

        const lines = trimmed.split('\n').map(l => l.trim()).filter(l => l.length > 0 && !l.startsWith('#'));
        const pairs = [];

        for (const line of lines) {
            let parts = null;
            if (line.includes('=')) parts = line.split('=');
            else if (line.includes(' - ')) parts = line.split(' - ');
            else if (line.includes(':') && !line.toLowerCase().startsWith('http')) parts = line.split(':');
            else if (line.includes(';')) parts = line.split(';');
            else if (line.includes('\t')) parts = line.split('\t');

            if (parts && parts.length >= 2) {
                const left = parts[0].trim();
                const right = parts.slice(1).join(':').trim();
                if (left && right) {
                    pairs.push({ left, right });
                }
            }
        }

        if (pairs.length === 0) {
            throw new Error('Nie rozpoznano żadnych par ani pytań. Użyj formatu: "Pojęcie = Wyjaśnienie" lub "Word = Słowo"');
        }

        const questions = [];

        pairs.forEach((pair, idx) => {
            const otherPairs = pairs.filter((_, i) => i !== idx);
            const shuffledOthers = otherPairs.sort(() => 0.5 - Math.random());
            const distractors = shuffledOthers.slice(0, 3).map(p => p.right);

            const options = [pair.right, ...distractors].sort(() => 0.5 - Math.random());
            const correctIndex = options.indexOf(pair.right);

            questions.push({
                type: 'multiple_choice',
                prompt: `Co oznacza / jaka jest poprawna forma dla: "${pair.left}"?`,
                audioPrompt: pair.left,
                lang: 'de-DE',
                options: options,
                correctIndex: correctIndex
            });
        });

        if (pairs.length >= 4) {
            const matchCount = Math.min(6, pairs.length);
            const selectedForMatch = [...pairs].sort(() => 0.5 - Math.random()).slice(0, matchCount);
            questions.push({
                type: 'match_pairs',
                prompt: 'Połącz pasujące do siebie pary',
                pairs: selectedForMatch
            });
        }

        pairs.slice(0, 4).forEach(pair => {
            questions.push({
                type: 'type_in',
                prompt: `Wpisz formę / odpowiedź dla: "${pair.left}"`,
                acceptedAnswers: [pair.right.toLowerCase().trim()],
                hint: `Pierwsza litera to "${pair.right[0]}"`
            });
        });

        const unitId = 'custom-' + Date.now();
        return {
            id: unitId,
            title: title || 'Mój własny kurs',
            description: description || `${pairs.length} opanowanych pojęć`,
            color: '#a435f0',
            accentColor: '#8a2be2',
            isCustom: true,
            lessons: [
                {
                    id: `${unitId}-lesson-1`,
                    title: 'Lekcja główna',
                    icon: '🚀',
                    description: `Trening ${pairs.length} elementów`,
                    xp: questions.length * 5,
                    questions: questions
                }
            ]
        };
    }
}

window.CourseManager = CourseManager;
window.GERMAN_COURSE_UNITS = GERMAN_COURSE_UNITS;
