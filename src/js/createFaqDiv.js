function createFaqDiv(el) {
    const divEl = document.createElement('div');
    divEl.classList.add('accordion__item');

    const btnAcc = document.createElement('h3');
    btnAcc.classList.add('accordion__question-title');
    btnAcc.textContent = el.question;

    const answer = document.createElement('div');
    answer.classList.add('accordion__answer');
    answer.textContent = el.answer;
    answer.style.display = 'none';

    const all = document.createElement('div');
    all.classList.add('accordion__question-all');

    const content = document.createElement('p');
    content.classList.add('accordion__question-content')
    content.textContent = '+';

    all.append(btnAcc);
    all.append(answer);
    divEl.append(all);
    divEl.append(content);

    return divEl;
}

export default createFaqDiv;