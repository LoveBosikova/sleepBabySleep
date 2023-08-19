import createDays from './createDays.js';
import renderTags from './renderTags.js';
import changeVisibility from './changeVisibility.js';
import createChart from './createChart.js';

const render = (state) => {
    const daysWrap = document.getElementById('datesWrap');
    daysWrap.innerHTML = '';
    createDays(state.stateUI.calendarWeek);
    renderTags(state.stateUI.tags);
    changeVisibility(state.stateUI.accordion);
    createChart(state.stateUI.dataForWeek, 'График дня вашего малыша');
};

export default render;