function createFaqDiv(faq) {
    const divEl = document.createElement('div');
    divEl.classList.add('accordion__item');

    const btnAcc = document.createElement('button');
    btnAcc.classList.add('accordion__question');
    btnAcc.textContent = faq.question;

    const answer = document.createElement('div');
    answer.classList.add('accordion__answer');
    answer.textContent = faq.answer;
    answer.style.display = faq.display;

    if (faq.display == 'none') {

    } else {

    }

    divEl.append(btnAcc);
    divEl.append(answer);
    return divEl;
}

export default createFaqDiv;