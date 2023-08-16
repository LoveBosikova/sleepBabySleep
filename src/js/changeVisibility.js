function changeVisibility(state, i) {
    if (state.display == 'none') {
        state.display = 'block';
    } else {
        state.display = 'none';
    }
    const answers = [...document.getElementsByClassName('accordion__answer')];
    answers[i].style.display = state.display;
}

export default changeVisibility;