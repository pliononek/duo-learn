// Course definitions & Dynamic Lesson Generator
const DEFAULT_COURSES = [
    {
        id: 'unit-1',
        title: 'Sekcja 1: Pierwsze kroki',
        description: 'Podstawowe zwroty, powitania i pierwsze słowa',
        color: '#58cc02',
        accentColor: '#46a302',
        lessons: [
            {
                id: 'unit-1-lesson-1',
                title: 'Powitania i zwroty grzecznościowe',
                icon: '👋',
                description: 'Naucz się witać, żegnać i dziękować.',
                xp: 15,
                questions: [
                    {
                        type: 'multiple_choice',
                        prompt: 'Wybierz poprawne tłumaczenie dla: "Cześć"',
                        audioPrompt: 'Hello',
                        lang: 'en-US',
                        options: ['Hello', 'Goodbye', 'Please', 'Water'],
                        correctIndex: 0
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Ułóż zdanie: "Dzień dobry, miło cię poznać"',
                        audioPrompt: 'Good morning, nice to meet you',
                        lang: 'en-US',
                        tokens: ['Good', 'morning', 'nice', 'to', 'meet', 'you'],
                        distractors: ['night', 'bad', 'thanks'],
                        correctSentence: 'Good morning nice to meet you'
                    },
                    {
                        type: 'match_pairs',
                        prompt: 'Dopasuj pary słów',
                        pairs: [
                            { left: 'Dziękuję', right: 'Thank you' },
                            { left: 'Proszę', right: 'Please' },
                            { left: 'Tak', right: 'Yes' },
                            { left: 'Nie', right: 'No' }
                        ]
                    },
                    {
                        type: 'type_in',
                        prompt: 'Wpisz po angielsku: "Do widzenia"',
                        acceptedAnswers: ['goodbye', 'bye', 'good bye', 'bye bye'],
                        hint: 'Zaczyna się na "G..." lub "B..."'
                    },
                    {
                        type: 'listen',
                        prompt: 'Posłuchaj wymowy i wskaż co usłyszałeś:',
                        audioText: 'Thank you very much',
                        lang: 'en-US',
                        options: [
                            'Thank you very much',
                            'Thank you my friend',
                            'See you tomorrow morning'
                        ],
                        correctIndex: 0
                    }
                ]
            },
            {
                id: 'unit-1-lesson-2',
                title: 'W kawiarni i restauracji',
                icon: '☕',
                description: 'Zamawianie jedzenia i napojów.',
                xp: 20,
                questions: [
                    {
                        type: 'multiple_choice',
                        prompt: 'Co oznacza słowo "Coffee"?',
                        audioPrompt: 'Coffee',
                        lang: 'en-US',
                        options: ['Kawa', 'Herbata', 'Sok', 'Mleko'],
                        correctIndex: 0
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Ułóż po angielsku: "Poproszę kawę z mlekiem"',
                        audioPrompt: 'A coffee with milk, please',
                        lang: 'en-US',
                        tokens: ['A', 'coffee', 'with', 'milk', 'please'],
                        distractors: ['tea', 'without', 'water'],
                        correctSentence: 'A coffee with milk please'
                    },
                    {
                        type: 'match_pairs',
                        prompt: 'Dopasuj napoje i pojęcia',
                        pairs: [
                            { left: 'Woda', right: 'Water' },
                            { left: 'Herbata', right: 'Tea' },
                            { left: 'Cukier', right: 'Sugar' },
                            { left: 'Rachunek', right: 'Bill' }
                        ]
                    },
                    {
                        type: 'type_in',
                        prompt: 'Wpisz po angielsku: "Woda"',
                        acceptedAnswers: ['water', 'a water'],
                        hint: 'Słowo ma 5 liter i zaczyna się na W'
                    }
                ]
            },
            {
                id: 'unit-1-lesson-3',
                title: 'Ludzie i relacje',
                icon: '🤝',
                description: 'Przedstawianie się i rozmowa.',
                xp: 20,
                questions: [
                    {
                        type: 'multiple_choice',
                        prompt: 'Jak zapytasz: "Jak się masz?"',
                        audioPrompt: 'How are you?',
                        lang: 'en-US',
                        options: ['How are you?', 'Who are you?', 'Where are you?', 'How old are you?'],
                        correctIndex: 0
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Ułóż po angielsku: "Mam na imię Alex"',
                        audioPrompt: 'My name is Alex',
                        lang: 'en-US',
                        tokens: ['My', 'name', 'is', 'Alex'],
                        distractors: ['Your', 'friend', 'are'],
                        correctSentence: 'My name is Alex'
                    },
                    {
                        type: 'type_in',
                        prompt: 'Wpisz po angielsku: "Przyjaciel"',
                        acceptedAnswers: ['friend', 'a friend'],
                        hint: 'F _ _ _ _ D'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-2',
        title: 'Sekcja 2: Technologia i Świat IT',
        description: 'Pojęcia techniczne, kodowanie i praca w sieci',
        color: '#1cb0f6',
        accentColor: '#1899d6',
        lessons: [
            {
                id: 'unit-2-lesson-1',
                title: 'Podstawy programowania',
                icon: '💻',
                description: 'Zmienne, funkcje i kod.',
                xp: 25,
                questions: [
                    {
                        type: 'multiple_choice',
                        prompt: 'Czym jest "Variable" w programowaniu?',
                        options: ['Zmienna', 'Pętla', 'Funkcja stała', 'Błąd kompilacji'],
                        correctIndex: 0
                    },
                    {
                        type: 'match_pairs',
                        prompt: 'Dopasuj pojęcia programistyczne',
                        pairs: [
                            { left: 'Array', right: 'Tablica' },
                            { left: 'Function', right: 'Funkcja' },
                            { left: 'Loop', right: 'Pętla' },
                            { left: 'Bug', right: 'Błąd w kodzie' }
                        ]
                    },
                    {
                        type: 'word_bank',
                        prompt: 'Ułóż zdanie: "Kod działa bez żadnych błędów"',
                        audioPrompt: 'The code works without any bugs',
                        lang: 'en-US',
                        tokens: ['The', 'code', 'works', 'without', 'any', 'bugs'],
                        distractors: ['fails', 'error', 'system'],
                        correctSentence: 'The code works without any bugs'
                    },
                    {
                        type: 'type_in',
                        prompt: 'Jak po angielsku nazywamy "Pętlę" w kodzie?',
                        acceptedAnswers: ['loop', 'a loop'],
                        hint: 'Słowo 4-literowe, np. for ____'
                    }
                ]
            }
        ]
    }
];

class CourseManager {
    static getAllUnits() {
        const customUnits = window.duoStorage ? window.duoStorage.getCustomUnits() : [];
        return [...customUnits, ...DEFAULT_COURSES];
    }

    static findLesson(lessonId) {
        const units = this.getAllUnits();
        for (const unit of units) {
            const found = unit.lessons.find(l => l.id === lessonId);
            if (found) return { unit, lesson: found };
        }
        return null;
    }

    /**
     * Inteligentny parser dowolnego tekstu użytkownika.
     * Obsługuje formaty:
     * 1. Pary: "słowo = tłumaczenie" lub "word : translation" lub "pojęcie - definicja"
     * 2. Pytania Q&A: "P: Pytanie? | O: Odpowiedź"
     * 3. Gotowy JSON
     */
    static parseUserTextToUnit(rawText, title = 'Własny zestaw pytań', description = 'Zestaw dodany przez Ciebie') {
        const trimmed = rawText.trim();

        // 1. Sprawdź, czy to JSON
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
            } catch (e) {
                // Not valid JSON, continue with line-by-line parsing
            }
        }

        // 2. Parsuj linijka po linijce: "klucz = wartość" / "word - translation"
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

        // Generuj pytania z par
        const questions = [];

        // A. Pytania wielokrotnego wyboru (Multiple choice)
        pairs.forEach((pair, idx) => {
            // Wybierz do 3 błędnych odpowiedzi (distractors)
            const otherPairs = pairs.filter((_, i) => i !== idx);
            const shuffledOthers = otherPairs.sort(() => 0.5 - Math.random());
            const distractors = shuffledOthers.slice(0, 3).map(p => p.right);

            const options = [pair.right, ...distractors].sort(() => 0.5 - Math.random());
            const correctIndex = options.indexOf(pair.right);

            questions.push({
                type: 'multiple_choice',
                prompt: `Co oznacza: "${pair.left}"?`,
                audioPrompt: pair.left,
                options: options,
                correctIndex: correctIndex
            });
        });

        // B. Jeśli jest co najmniej 4 pary, wygeneruj kafelki łączenia par (Match pairs)
        if (pairs.length >= 4) {
            const matchCount = Math.min(6, pairs.length);
            const selectedForMatch = [...pairs].sort(() => 0.5 - Math.random()).slice(0, matchCount);
            questions.push({
                type: 'match_pairs',
                prompt: 'Połącz pasujące do siebie pary',
                pairs: selectedForMatch
            });
        }

        // C. Pytania typu wpisywanie (Type-in) dla części słów
        pairs.slice(0, 4).forEach(pair => {
            questions.push({
                type: 'type_in',
                prompt: `Wpisz tłumaczenie / odpowiedź dla: "${pair.left}"`,
                acceptedAnswers: [pair.right.toLowerCase().trim()],
                hint: `Pierwsza litera to "${pair.right[0]}"`
            });
        });

        // D. Zdania wielowyrazowe zamień w Word Bank
        pairs.filter(p => p.right.split(' ').length >= 3).forEach(pair => {
            const words = pair.right.split(' ').map(w => w.replace(/[,.?!]/g, '').trim()).filter(Boolean);
            const distractorPool = ['the', 'is', 'a', 'to', 'nie', 'tak', 'jest', 'w'];
            questions.push({
                type: 'word_bank',
                prompt: `Ułóż zdanie dla: "${pair.left}"`,
                tokens: words,
                distractors: distractorPool.slice(0, 3),
                correctSentence: words.join(' ')
            });
        });

        const unitId = 'custom-' + Date.now();
        const newUnit = {
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

        return newUnit;
    }
}

window.CourseManager = CourseManager;
window.DEFAULT_COURSES = DEFAULT_COURSES;
