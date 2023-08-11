class Sleeping {
    constructor(startTime, startTimeDiffPerfectTime, endTime, endTimeDiffPerfectTime, recommendations) {
        this.startTime = moment(startTime);
        this.startTimeDiffPerfectTime = moment.duration(startTimeDiffPerfectTime);
        this.endTime = moment(endTime);
        this.endTimeDiffPerfectTime = moment.duration(endTimeDiffPerfectTime);
        this.recommendations = recommendations;
    }
}

Sleeping.prototype.getStartTime = function () {
    return this.startTime;
};

Sleeping.prototype.setStartTime = function (dateObj) {
    this.startTime = moment(dateObj).format;
};

Sleeping.prototype.getStartTimeDiffPerfectTime = function () {
    return this.startTimeDiffPerfectTime;
};

Sleeping.prototype.setStartTimeDiffPerfectTime = function (value) {
    this.startTimeDiffPerfectTime = moment(value);
};

Sleeping.prototype.getEndTime = function () {
    return this.endTime;
};

Sleeping.prototype.setEndTime = function (dateObj) {
    this.endTime = moment(dateObj);
};

Sleeping.prototype.getEndTimeDiffPerfectTime = function () {
    return this.endTimeDiffPerfectTime;
};

Sleeping.prototype.setEndTimeDiffPerfectTime = function (value) {
    this.endTimeDiffPerfectTime = moment.duration(value);
};

Sleeping.prototype.getRecommendations = function () {
    return this.recommendations;
};

Sleeping.prototype.setRecommendations = function (value) {
    this.setRecommendations = moment.duration(value);
};

Sleeping.prototype.getSleepDuration = function () {
    return moment.duration(this.endTime.diff(this.startTime));
};

export class DayNap extends Sleeping {}

export class NightSleep extends Sleeping {}

export default Sleeping;
