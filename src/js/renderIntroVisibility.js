export default (stateUI) => {
    const blockIntro = document.querySelector('.tracker');
    const arrow = document.querySelector('.normalize__arrow');
    const btnText = document.querySelector('.normalize__btnText');
    const mainSection = document.querySelector('.mainSection');
    const clouds = document.querySelector('.clouds');
    
    if (stateUI.introBlocks === 'visible') {
        window.localStorage.setItem('introBlocks', 'visible');
        blockIntro.classList.remove('hide-animation');
        blockIntro.classList.add('show-animation');
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
        btnText.textContent = 'Скрыть интро';
        clouds.classList.remove('clouds--up');
        clouds.classList.add('clouds--down');
        mainSection.classList.remove('mainSection--down');
        mainSection.classList.add('mainSection--up');
        btnText.style.color = 'black';

    } else if (stateUI.introBlocks === 'hidden') {
        window.localStorage.setItem('introBlocks', 'hidden');

        blockIntro.classList.remove('show-animation');
        blockIntro.classList.add('hide-animation');
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
        btnText.textContent = 'Показать интро';
        clouds.classList.remove('clouds--down');
        clouds.classList.add('clouds--up');
        mainSection.classList.remove('mainSection--up');
        mainSection.classList.add('mainSection--down');
        btnText.style.color = 'white';
    }
}