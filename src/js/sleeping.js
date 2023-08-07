export class Sleeping {
    #startTime;
    #startTimeDiff;
    #endTime;
    #endTimeDiff;
    #recommendations;

    constructor(startTime, startTimeDiff, endTime, endTimeDiff, recommendations) {
        this.#startTime = startTime;
        this.#startTimeDiff = startTimeDiff;
        this.#endTime = endTime;
        this.#endTimeDiff = endTimeDiff;
        this.#recommendations = recommendations;
    }

    getStartTime() {
        return this.#startTime;
    }

    setStartTime(value) {
        this.#startTime = value;
    }

    getStartTimeDiff() {
        return this.#startTimeDiff;
    }

    setStartTimeDiff(value) {
        this.#startTimeDiff = value;
    }

    getEndTime() {
        return this.#endTime;
    }

    setEndTime(value) {
        this.#endTime = value;
    }

    getEndTimeDiff() {
        return this.#endTimeDiff;
    }

    setEndTimeDiff(value) {
        this.#endTimeDiff = value;
    }

    getRecommendations() {
        return this.#recommendations;
    }

    setRecommendations(value) {
        this.#setRecommendations = value;
    }

    getSleepDuration() {
        return new Date(this.#endTime.getTime() - this.#startTime.getTime());
    }
}

export class DayNap extends Sleeping {}

export class NightSleep extends Sleeping {
    #sleepDurBeforeMid;
    #sleepDurAfterMid;
}
