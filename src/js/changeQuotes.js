import quotes from "./quotes";
let i = 0;

function changeQuotes() {
    const qoute1 = document.getElementById('quote1');
    const quote2 = document.getElementById('quote2');
    if (i == quotes.length - 1) {
        i = 0;
    }
    qoute1.textContent = `${quotes[i].quote}`;
    quote2.textContent = `${quotes[i+1].quote}`;
    ++i;
}

export default changeQuotes;