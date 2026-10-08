// Web Audio API Synthesizer - 100% standalone sound effects (no external mp3 files required)
class SoundFX {
    constructor() {
        this.ctx = null;
        this.muted = localStorage.getItem('duo_muted') === 'true';
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        localStorage.setItem('duo_muted', this.muted);
        return this.muted;
    }

    isMuted() {
        return this.muted;
    }

    playTone(freq, type = 'sine', duration = 0.15, startTime = 0, gainLevel = 0.25) {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        const t = this.ctx.currentTime + startTime;
        osc.type = type;
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(gainLevel, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + duration);
    }

    playClick() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        // Snappy light tap
        this.playTone(600, 'sine', 0.05, 0, 0.12);
        this.playTone(850, 'triangle', 0.04, 0.01, 0.1);
    }

    playTileSelect() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        this.playTone(520, 'sine', 0.08, 0, 0.15);
    }

    playTileReturn() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        this.playTone(400, 'sine', 0.08, 0, 0.12);
    }

    playCorrect() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        // Signature cheerful Duolingo-like 2-tone chime (arpeggio high)
        const now = 0;
        this.playTone(587.33, 'triangle', 0.12, now, 0.25);        // D5
        this.playTone(880.00, 'triangle', 0.35, now + 0.09, 0.3);  // A5
    }

    playIncorrect() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        // Soft, discouraging low buzz/double bonk
        const now = 0;
        this.playTone(220, 'sawtooth', 0.15, now, 0.18);
        this.playTone(180, 'sawtooth', 0.22, now + 0.12, 0.2);
    }

    playWin() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        // Triumphant victory fanfare (C5 -> E5 -> G5 -> C6)
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
            this.playTone(freq, 'triangle', 0.28, i * 0.1, 0.28);
        });
        // Final shimmer
        this.playTone(1046.50, 'sine', 0.6, 0.4, 0.3);
        this.playTone(1318.51, 'sine', 0.7, 0.45, 0.2);
    }

    playStreak() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        // Energetic rising sweep
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, t);
        osc.frequency.exponentialRampToValueAtTime(900, t + 0.3);

        gain.gain.setValueAtTime(0.25, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 0.35);
    }
}

window.soundFX = new SoundFX();
