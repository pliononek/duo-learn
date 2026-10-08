// Duo Mascot SVG Generator with emotional expressions
class Mascot {
    static getSvg(mood = 'happy', size = 120) {
        let eyesHtml = '';
        let mouthHtml = '';
        let wingsHtml = '';
        let accessoriesHtml = '';

        switch (mood) {
            case 'cheer':
                // Sparkle / star eyes, raised wings, wide open smile
                eyesHtml = `
                    <!-- Left Star Eye -->
                    <polygon points="46,55 49,63 58,63 51,68 53,77 46,72 39,77 41,68 34,63 43,63" fill="#ffffff" />
                    <!-- Right Star Eye -->
                    <polygon points="74,55 77,63 86,63 79,68 81,77 74,72 67,77 69,68 62,63 71,63" fill="#ffffff" />
                `;
                wingsHtml = `
                    <!-- Cheering raised wings -->
                    <path d="M 22 65 C 10 50, 15 35, 26 42 C 28 52, 28 60, 22 65 Z" fill="#46a302" />
                    <path d="M 98 65 C 110 50, 105 35, 94 42 C 92 52, 92 60, 98 65 Z" fill="#46a302" />
                `;
                accessoriesHtml = `
                    <!-- Sparkles around -->
                    <circle cx="20" cy="28" r="3" fill="#ffc800" class="sparkle" />
                    <circle cx="100" cy="25" r="4" fill="#ffc800" class="sparkle" />
                    <circle cx="110" cy="50" r="2.5" fill="#ff4b4b" class="sparkle" />
                `;
                break;

            case 'sad':
                // Droopy eyes with tears, drooping wings
                eyesHtml = `
                    <!-- Left sad eye -->
                    <ellipse cx="46" cy="64" rx="10" ry="11" fill="#ffffff" />
                    <ellipse cx="46" cy="66" rx="6" ry="6" fill="#4b4b4b" />
                    <!-- Right sad eye -->
                    <ellipse cx="74" cy="64" rx="10" ry="11" fill="#ffffff" />
                    <ellipse cx="74" cy="66" rx="6" ry="6" fill="#4b4b4b" />
                    <!-- Slanted eyebrows -->
                    <path d="M 36 50 Q 46 56 54 55" stroke="#2b6600" stroke-width="3" stroke-linecap="round" fill="none" />
                    <path d="M 84 50 Q 74 56 66 55" stroke="#2b6600" stroke-width="3" stroke-linecap="round" fill="none" />
                    <!-- Tear drop -->
                    <path d="M 78 72 C 78 72, 83 80, 83 83 C 83 86, 80 88, 78 88 C 76 88, 73 86, 73 83 C 73 80, 78 72, 78 72 Z" fill="#1cb0f6" />
                `;
                wingsHtml = `
                    <!-- Drooping wings -->
                    <path d="M 22 75 C 16 85, 20 95, 28 92 C 30 84, 28 77, 22 75 Z" fill="#46a302" />
                    <path d="M 98 75 C 104 85, 100 95, 92 92 C 90 84, 92 77, 98 75 Z" fill="#46a302" />
                `;
                break;

            case 'thinking':
                // Eyebrow raised, pupil looking up
                eyesHtml = `
                    <ellipse cx="46" cy="62" rx="11" ry="12" fill="#ffffff" />
                    <ellipse cx="46" cy="58" rx="6" ry="7" fill="#4b4b4b" />
                    <circle cx="44" cy="56" r="2" fill="#ffffff" />

                    <ellipse cx="74" cy="62" rx="11" ry="12" fill="#ffffff" />
                    <ellipse cx="74" cy="58" rx="6" ry="7" fill="#4b4b4b" />
                    <circle cx="72" cy="56" r="2" fill="#ffffff" />

                    <path d="M 37 48 Q 46 45 55 48" stroke="#2b6600" stroke-width="3" stroke-linecap="round" fill="none" />
                    <path d="M 66 45 Q 75 42 84 46" stroke="#2b6600" stroke-width="3" stroke-linecap="round" fill="none" />
                `;
                wingsHtml = `
                    <!-- One wing scratching chin -->
                    <path d="M 22 70 C 14 74, 16 86, 26 84 C 28 78, 26 73, 22 70 Z" fill="#46a302" />
                    <path d="M 98 70 C 102 60, 85 64, 76 72 C 84 76, 92 78, 98 70 Z" fill="#46a302" />
                `;
                break;

            case 'win':
                // Party hat, gold medal, big happy grin
                accessoriesHtml = `
                    <!-- Party Hat -->
                    <polygon points="60,10 45,36 75,36" fill="#ff4b4b" />
                    <polygon points="60,10 52,36 68,36" fill="#ffc800" />
                    <circle cx="60" cy="10" r="5" fill="#ffc800" />
                    <!-- Gold Medal -->
                    <circle cx="60" cy="98" r="8" fill="#ffc800" stroke="#e5a500" stroke-width="2" />
                    <text x="60" y="101" font-size="7" font-weight="bold" fill="#7a5500" text-anchor="middle">★</text>
                `;
                eyesHtml = `
                    <!-- Happy curved squinting eyes -->
                    <path d="M 36 64 Q 46 54 56 64" stroke="#2b6600" stroke-width="4.5" stroke-linecap="round" fill="none" />
                    <path d="M 64 64 Q 74 54 84 64" stroke="#2b6600" stroke-width="4.5" stroke-linecap="round" fill="none" />
                `;
                wingsHtml = `
                    <path d="M 22 65 C 10 50, 15 35, 26 42 C 28 52, 28 60, 22 65 Z" fill="#46a302" />
                    <path d="M 98 65 C 110 50, 105 35, 94 42 C 92 52, 92 60, 98 65 Z" fill="#46a302" />
                `;
                break;

            case 'happy':
            default:
                // Classic big shiny curious eyes
                eyesHtml = `
                    <!-- Left eye -->
                    <ellipse cx="46" cy="62" rx="11" ry="12" fill="#ffffff" />
                    <ellipse cx="48" cy="62" rx="6.5" ry="7.5" fill="#4b4b4b" />
                    <circle cx="45" cy="59" r="2.5" fill="#ffffff" />

                    <!-- Right eye -->
                    <ellipse cx="74" cy="62" rx="11" ry="12" fill="#ffffff" />
                    <ellipse cx="72" cy="62" rx="6.5" ry="7.5" fill="#4b4b4b" />
                    <circle cx="69" cy="59" r="2.5" fill="#ffffff" />
                `;
                wingsHtml = `
                    <!-- Regular resting wings -->
                    <path d="M 22 68 C 14 74, 16 88, 26 84 C 28 78, 26 71, 22 68 Z" fill="#46a302" />
                    <path d="M 98 68 C 106 74, 104 88, 94 84 C 92 78, 94 71, 98 68 Z" fill="#46a302" />
                `;
                break;
        }

        return `
        <svg class="duo-owl duo-mood-${mood}" width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="owlBelly" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#8ee032"/>
                    <stop offset="100%" stop-color="#58cc02"/>
                </radialGradient>
            </defs>

            <!-- Feet -->
            <ellipse cx="47" cy="108" rx="8" ry="4.5" fill="#ff9600" />
            <ellipse cx="73" cy="108" rx="8" ry="4.5" fill="#ff9600" />

            <!-- Body Outer Shape -->
            <rect x="22" y="26" width="76" height="82" rx="38" fill="#58cc02" />

            <!-- Feather tufts on top/ears -->
            <polygon points="32,28 40,24 38,32" fill="#58cc02" />
            <polygon points="88,28 80,24 82,32" fill="#58cc02" />

            <!-- Wings -->
            ${wingsHtml}

            <!-- Belly highlight -->
            <ellipse cx="60" cy="78" rx="26" ry="24" fill="url(#owlBelly)" opacity="0.9" />

            <!-- Eye Circles Mask / Facial discs -->
            <circle cx="46" cy="62" r="15" fill="#46a302" />
            <circle cx="74" cy="62" r="15" fill="#46a302" />

            <!-- Eyes -->
            ${eyesHtml}

            <!-- Orange Beak -->
            <polygon points="60,65 52,75 68,75" fill="#ff9600" />
            <polygon points="60,77 54,75 66,75" fill="#e07e00" />

            <!-- Cheeks blush -->
            <circle cx="34" cy="74" r="5" fill="#ff4b4b" opacity="0.3" />
            <circle cx="86" cy="74" r="5" fill="#ff4b4b" opacity="0.3" />

            <!-- Extra mood accessories (hat, sparkles) -->
            ${accessoriesHtml}
        </svg>
        `;
    }

    static render(targetElementOrId, mood = 'happy', size = 120) {
        const el = typeof targetElementOrId === 'string' 
            ? document.getElementById(targetElementOrId) 
            : targetElementOrId;
        if (el) {
            el.innerHTML = this.getSvg(mood, size);
        }
    }
}

window.Mascot = Mascot;
