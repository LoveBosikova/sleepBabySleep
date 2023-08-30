function changeVisibility(state) {
    state.forEach((el, i) => {
        const questions = [...document.getElementsByClassName('accordion__question-title')];
        const content = [...document.getElementsByClassName('accordion__question-content')];
        const answers = [...document.getElementsByClassName('accordion__answer')];
        const items = [...document.getElementsByClassName('accordion-item')];



        if (el.display == 'none') {
            content[i].textContent = '+';
            content[i].style.color = '#FFFFFF';
            content[i].style.backgroundColor = '#2F80EC';
            questions[i].style.fontFamily = 'Bellota Text';
            questions[i].style.fontWeight = '700';
            items[i].style.backgroundColor = '#10132F';
            items[i].style.paddingBottom = '1em';
        } else {
            content[i].textContent = '-';
            content[i].style.color = '#2F80EC';
            content[i].style.backgroundColor = '#FFFFFF';
            questions[i].style.fontFamily = 'JetBrains Mono';
            if (questions[i].style.fontWeight != '300') {
                items[i].style.animation = "itemOpen 1s";
            }
            questions[i].style.fontWeight = '300';
            items[i].style.backgroundColor = '#2F80EC';
            items[i].style.paddingBottom = '3em';
        }

        answers[i].style.display = el.display;
        setTimeout(() => items[i].style.animation = '', 500)
    });
}

export default changeVisibility;