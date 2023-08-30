import quotes from "./quotes";
let i = 0;

function changeQoutesForward() {
    const quote1 = document.getElementById('quote1');
    const quote2 = document.getElementById('quote2');

    quote1.style.animation = 'changeOpasityBack 1s';
    quote2.style.animation = 'changeOpasityBack 1s';

    if (i + 1 >= quotes.length - 1) {
        i = 0;
    }
    setTimeout(() => {
        quote1.textContent = `${quotes[i].quote}`;
        quote1.style.animation = 'changeOpasity 1s';
        quote2.textContent = `${quotes[i+1].quote}`;
        quote2.style.animation = 'changeOpasity 1s';
    }, 1000);

    i += 2;

    setTimeout(() => {
        quote1.style.animation = '';
        quote2.style.animation = '';
    }, 2000);
}


export default changeQoutesForward;