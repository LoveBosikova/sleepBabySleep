export default (stateUI) => {
    const blockIntro = document.querySelector('.tracker');
    const blockIntroSteps = document.querySelector('.normalize');
    const arrow = document.querySelector('.normalize__arrow');
    const btnText = document.querySelector('.normalize__btnText');

    if (stateUI.introBlocks === 'visible') {
        blockIntro.style.position = 'static';
        blockIntroSteps.style.position = 'relative';
        arrow.style.transform = 'rotate(180deg)';
        btnText.textContent = 'Скрыть интро';
    } else if (stateUI.introBlocks === 'hidden') {
        blockIntro.style.position = 'absolute';
        blockIntroSteps.style.position = 'absolute';
        blockIntro.style.top = '-100%';
        blockIntroSteps.style.top = '-55%';
        arrow.style.transform = 'rotate(0deg)';
        btnText.textContent = 'Показать интро';
    }
    
}