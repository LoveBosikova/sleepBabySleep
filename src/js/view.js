import createDays from './createDays.js';
import renderTags from './renderTags.js';

const render = (state) => {
    const daysWrap = document.getElementById('datesWrap');
    daysWrap.innerHTML = '';
    createDays(state.stateUI.calendarWeek);
    renderTags(state.stateUI.tags);
    
    // Это пример
    // const submit = document.querySelector(/* .... */);
    // const input = document.querySelector(/* .... */);

    // submit.disabled = !state.registrationForm.valid;

    // if (state.registrationForm.valid) {
    //     input.style.border = null;
    // } else {
    //     input.style.border = 'thick solid red';
    // }
};

export default render;