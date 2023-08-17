function changeVisibility(state) {
    state.forEach((el, i) => {
        const questions = [...document.getElementsByClassName('accordion__question-title')];
        const content = [...document.getElementsByClassName('accordion__question-content')];
        const answers = [...document.getElementsByClassName('accordion__answer')];
        const items = [...document.getElementsByClassName('accordion__item')]

        if (el.display == 'none') {
            content[i].textContent = '+';
            content[i].style.color = '#FFFFFF';
            content[i].style.backgroundColor = '#2F80EC';
            questions[i].style.fontFamily = 'Bellota Text';
            questions[i].style.fontWeight = '700';
            items[i].style.backgroundColor = '#10132F';
        } else {
            content[i].textContent = '-';
            content[i].style.color = '#2F80EC';
            content[i].style.backgroundColor = '#FFFFFF';
            questions[i].style.fontFamily = 'JetBrains Mono';
            questions[i].style.fontWeight = '300';
            items[i].style.backgroundColor = '#2F80EC';
        }

        answers[i].style.display = el.display;
    });

}

export default changeVisibility;