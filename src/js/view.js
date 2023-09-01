import createDays from './createDays.js';
import renderTags from './renderTags.js';
import renderQuestions from './renderQuestions.js';

import changeBurgerMenu from './changeBurgerMenu.js';
import renderIntroVisibility from './renderIntroVisibility.js';


const donatModal = document.querySelector('.donate__wrap');
const hintModal = document.querySelector('.hint__wrap');
const autorizationModal = document.querySelector('.autorization__wrap');

const render = (state) => {
    const daysWrap = document.getElementById('datesWrap');
    daysWrap.innerHTML = '';
    createDays(state.stateUI.calendarWeek);
    renderTags(state.stateUI.tags);
    renderQuestions(state.stateUI.accordion);
    changeBurgerMenu(state.stateUI.burger);
    renderIntroVisibility(state.stateUI);

    if (state.stateUI.modals.donate === 'hidden') {
        donatModal.classList.remove('modal--down');
        donatModal.classList.add('modal--up');
    } else if (state.stateUI.modals.donate === 'visible') {
        donatModal.classList.remove('modal--up');
        donatModal.classList.add('modal--down');
    }

    // !!Добавить условием корректность данных формы!!
    if (state.stateUI.modals.hint === 'hidden') {
        hintModal.classList.remove('modal--down');
        hintModal.classList.add('modal--up');
    } else if (state.stateUI.modals.hint === 'visible') {
        hintModal.classList.remove('modal--up');
        hintModal.classList.add('modal--down');
    }

    if (state.stateUI.modals.autorization === 'hidden') {
        autorizationModal.classList.remove('modal--down');
        autorizationModal.classList.add('modal--up');
    } else if (state.stateUI.modals.autorization === 'visible') {
        autorizationModal.classList.remove('modal--up');
        autorizationModal.classList.add('modal--down');
    }
};

export default render;