class Baby {
    constructor(babyName, birthday, temperament, motherName, fatherName) {
        this.babyName = babyName;
        this.birthday = moment(birthday).format('DD-MM-YYYY');
        this.temperament = temperament;
        this.babyImage = babyImage;
        this.motherImage = motherImage;
        this.fatherImage = fatherImage;
        this.motherName = motherName;
        this.fatherName = fatherName;
    }
    getImage() {
        return {
            babyImage: this.babyImage,
            motherImage: this.motherImage,
            fatherImage: this.fatherImage
        };
    }
    getAge() {
        let today = moment().format('DD-MM-YYYY');
        return {
            days: today.diff(this.birthday, 'days'),
            month: today.diff(this.birthday, 'month'),
            years: today.diff(this.birthday, 'years'),
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