class Baby {
    constructor(name, mother, father, birthday, temperament) {
        this.name = name;
        this.mother = mother;
        this.father = father;
        this.birthday = birthday;
        this.temperament = temperament;
    }
    getImage() {
        return {
            image: this.image
        };
    }
    getAge() {
        let todayYear = new Date().getFullYear();
        let todayMonth = new Date().getMonth();
        let todayDay = new Date().getDate();

        return {
            year: todayYear - this.birthday.getFullYear(),
            month: todayMonth - this.birthday.getMonth(),
            day: todayDay - this.birthday.getDate(),
        }
    }
    getDaySleep(newTime) {
        return daySleeps.push(newTime);
    }
    getNightSleep(newTime) {
        return nightSleeps.push(newTime);
    }
    getBetterDaySleep() {
        let max = daySleeps.sort((a, b) => b - a)[0];
        return max;
    }
    getBetterNightSpeep() {
        let max = nightSleeps.sort((a, b) => b - a)[0];
        return max;
    }
}