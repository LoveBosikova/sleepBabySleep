import quotes from "./quotes";

let j = quotes.length - 2;

function changeQoutesBackward() {
    const qoute1 = document.getElementById('quote1');
    const quote2 = document.getElementById('quote2');
    if (j < 0) {
        j = quotes.length - 2;
    }
    qoute1.textContent = `${quotes[j].quote}`;
    quote2.textContent = `${quotes[j+1].quote}`;
    j -= 2;
}

export default changeQoutesBackward;