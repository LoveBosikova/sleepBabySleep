import quotes from "./quotes";
let i = 0;

function changeQoutesForward() {
    const qoute1 = document.getElementById('quote1');
    const quote2 = document.getElementById('quote2');
    if (i + 1 >= quotes.length - 1) {
        i = 0;
    }
    qoute1.textContent = `${quotes[i].quote}`;
    quote2.textContent = `${quotes[i+1].quote}`;
    i += 2;
}


export default changeQoutesForward;