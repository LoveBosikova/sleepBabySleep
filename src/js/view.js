import createDays from './createDays.js';
import renderTags from './renderTags.js';
import renderQuestions from './renderQuestions.js';

import changeBurgerMenu from './changeBurgerMenu.js';
import renderIntroVisibility from './renderIntroVisibility.js';


const render = (state) => {
    const daysWrap = document.getElementById('datesWrap');
    daysWrap.innerHTML = '';
    createDays(state.stateUI.calendarWeek);
    renderTags(state.stateUI.tags);
    renderQuestions(state.stateUI.accordion);

    changeBurgerMenu(state.stateUI.burger);
    renderIntroVisibility(state.stateUI);
};

export default render;