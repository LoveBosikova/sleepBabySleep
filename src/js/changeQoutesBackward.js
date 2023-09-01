import quotes from "./quotes";

let j = quotes.length - 2;

function changeQoutesBackward() {
    const quote1 = document.getElementById('quote1');
    const quote2 = document.getElementById('quote2');

    quote1.style.animation = 'changeOpasityBack 1s';
    quote2.style.animation = 'changeOpasityBack 1s';

    if (j < 0) {
        j = quotes.length - 2;
    }

    setTimeout(() => {
        quote1.textContent = `${quotes[j].quote}`;
        quote1.style.animation = 'changeOpasity 1s';
        quote2.textContent = `${quotes[j+1].quote}`;
        quote2.style.animation = 'changeOpasity 1s';
    }, 1000);

    j -= 2;

    setTimeout(() => {
        quote1.style.animation = '';
        quote2.style.animation = '';
    }, 2000);
}

export default changeQoutesBackward;