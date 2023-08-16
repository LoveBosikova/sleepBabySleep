import createFaqDiv from "./createFaqDiv";
import faq from "./faq";

function createFaq(faq) {
    const faqList = document.getElementById('faqList');
    faqList.innerHTML = '';
    faq.forEach(el => {
        faqList.append(createFaqDiv(el));
    })
};

export default createFaq;