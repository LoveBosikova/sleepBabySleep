import createDays from './createDays.js';
import renderTags from './renderTags.js';
import createFaq from './createFAQ.js';

const render = (state) => {
    const daysWrap = document.getElementById('datesWrap');
    daysWrap.innerHTML = '';
    createDays(state.stateUI.calendarWeek);
    renderTags(state.stateUI.tags);

    const faqList = document.getElementById('faqList');
    faqList.innerHTML = '';
    createFaq(state.stateUI.accordion)
};

export default render;