// Storage & State Management for DuoLearn
class DuoStorage {
    constructor() {
        this.KEY = 'duolearn_userdata_v1';
        this.data = this.load();
        this.checkStreakStatus();
    }

    getDefaults() {
        return {
            xp: 0,
            gems: 100,
            hearts: 5,
            maxHearts: 5,
            streak: 0,
            lastActiveDate: null,
            completedLessons: {}, // { lessonId: { score: 100, stars: 3, completedAt: '...' } }
            customUnits: [],
            dailyGoal: 30,
            dailyXP: 0,
            dailyDate: this.getTodayDate()
        };
    }

    getTodayDate() {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    getYesterdayDate() {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    load() {
        try {
            const raw = localStorage.getItem(this.KEY);
            if (!raw) return this.getDefaults();
            const parsed = JSON.parse(raw);
            return Object.assign(this.getDefaults(), parsed);
        } catch (e) {
            console.error('Failed to parse localStorage:', e);
            return this.getDefaults();
        }
    }

    save() {
        try {
            localStorage.setItem(this.KEY, JSON.stringify(this.data));
            window.dispatchEvent(new CustomEvent('duo_state_changed', { detail: this.data }));
        } catch (e) {
            console.error('Failed to save to localStorage:', e);
        }
    }

    checkStreakStatus() {
        const today = this.getTodayDate();
        const yesterday = this.getYesterdayDate();

        // Check daily XP reset
        if (this.data.dailyDate !== today) {
            this.data.dailyDate = today;
            this.data.dailyXP = 0;
        }

        // If user didn't practice today or yesterday, streak breaks
        if (this.data.lastActiveDate && this.data.lastActiveDate !== today && this.data.lastActiveDate !== yesterday) {
            this.data.streak = 0;
        }
        this.save();
    }

    addXP(amount) {
        this.data.xp += amount;
        this.data.dailyXP += amount;
        this.save();
    }

    addGems(amount) {
        this.data.gems += amount;
        this.save();
    }

    loseHeart() {
        if (this.data.hearts > 0) {
            this.data.hearts -= 1;
            this.save();
            return this.data.hearts;
        }
        return 0;
    }

    refillHearts() {
        this.data.hearts = this.data.maxHearts;
        this.save();
    }

    recordLessonCompletion(lessonId, xpEarned = 15) {
        const today = this.getTodayDate();
        let streakIncreased = false;

        if (this.data.lastActiveDate !== today) {
            this.data.streak += 1;
            this.data.lastActiveDate = today;
            streakIncreased = true;
        }

        this.addXP(xpEarned);
        this.addGems(10);

        if (!this.data.completedLessons[lessonId]) {
            this.data.completedLessons[lessonId] = {
                completedAt: today,
                times: 1
            };
        } else {
            this.data.completedLessons[lessonId].times += 1;
        }

        this.save();
        return { streakIncreased, streak: this.data.streak };
    }

    isLessonCompleted(lessonId) {
        return !!this.data.completedLessons[lessonId];
    }

    saveCustomUnit(unit) {
        const existingIdx = this.data.customUnits.findIndex(u => u.id === unit.id);
        if (existingIdx >= 0) {
            this.data.customUnits[existingIdx] = unit;
        } else {
            this.data.customUnits.push(unit);
        }
        this.save();
    }

    deleteCustomUnit(unitId) {
        this.data.customUnits = this.data.customUnits.filter(u => u.id !== unitId);
        this.save();
    }

    getCustomUnits() {
        return this.data.customUnits || [];
    }

    resetAll() {
        this.data = this.getDefaults();
        this.save();
    }
}

window.duoStorage = new DuoStorage();
