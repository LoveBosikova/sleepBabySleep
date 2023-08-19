import createDays from './createDays.js';
import renderTags from './renderTags.js';
import changeVisibility from './changeVisibility.js';
import changeBurgerMenu from './changeBurgerMenu.js';

const render = (state) => {
    const daysWrap = document.getElementById('datesWrap');
    daysWrap.innerHTML = '';
    createDays(state.stateUI.calendarWeek);
    renderTags(state.stateUI.tags);
    changeVisibility(state.stateUI.accordion);
    changeBurgerMenu(state.stateUI.burger);
};

export default render;