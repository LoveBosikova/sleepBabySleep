import createDays from './createDays.js';
import renderTags from './renderTags.js';
import changeVisibility from './changeVisibility.js';
import renderChart from './renderChart.js';

const render = (state) => {
    const daysWrap = document.getElementById('datesWrap');
    daysWrap.innerHTML = '';
    createDays(state.stateUI.calendarWeek);
    renderTags(state.stateUI.tags);
    changeVisibility(state.stateUI.accordion);
    renderChart(state.stateUI);
};

export default render;