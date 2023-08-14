// Взять из стейта массив дат
// взять оттуда момент 
// к каждому прибовить день
// обновить массив дат в стейте 

import createDays from "./createDays";
import render from './view.js';

function dayForward (state) {
    let week = state.stateUI.calendarWeek;
    const nextDay = week.shift()[2].add(7, 'd');
    week.push([nextDay.format('ddd'), nextDay.format('DD'), nextDay]);

    render(state);
}

function dayBackward (state){
    let week = state.stateUI.calendarWeek;
    const dayBefore = week.pop()[2].subtract(7, 'd');
    week.unshift([dayBefore.format('ddd'), dayBefore.format('DD'), dayBefore]);

    render(state);
}

export {
    dayForward,
    dayBackward
}