export class Sleeping {
    constructor(startTime, startTimeDiff, endTime, endTimeDiff, recommendations) {
        this.startTime = startTime;
        this.startTimeDiff = startTimeDiff;
        this.endTime = endTime;
        this.endTimeDiff = endTimeDiff;
        this.recommendations = recommendations;
    }
}

Sleeping.prototype.getStartTime = function () {
    return this.startTime;
};

Sleeping.prototype.setStartTime = function (value) {
    this.startTime = value;
};

Sleeping.prototype.getStartTimeDiff = function () {
    return this.startTimeDiff;
};

Sleeping.prototype.setStartTimeDiff = function (value) {
    this.startTimeDiff = value;
};

Sleeping.prototype.getEndTime = function () {
    return this.endTime;
};

Sleeping.prototype.setEndTime = function (value) {
    this.endTime = value;
};

Sleeping.prototype.getEndTimeDiff = function () {
    return this.endTimeDiff;
};

Sleeping.prototype.setEndTimeDiff = function (value) {
    this.endTimeDiff = value;
};

Sleeping.prototype.getRecommendations = function () {
    return this.recommendations;
};

Sleeping.prototype.setRecommendations = function (value) {
    this.setRecommendations = value;
};

Sleeping.prototype.getSleepDuration = function () {
    return new Date(this.endTime.getTime() - this.startTime.getTime());
};

export class DayNap extends Sleeping {}

export class NightSleep extends Sleeping {}
