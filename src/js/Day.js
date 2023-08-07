
export default class Day {
    constructor () {
        this.data = moment(day);
        this.dayNaps = [];
        this.nightSleep = [];
        this.bestMatch;
    }
}

Day.prototype.getData = function () {
    return this.data;
}

Day.prototype.dayNaps = function () {
    return this.dayNaps;
}

Day.prototype.nighthtSleep = function () {
    return this.nighthtSleep;
}

Day.prototype.nightSleep = function () {
    return this.nighthtSleep;
}
