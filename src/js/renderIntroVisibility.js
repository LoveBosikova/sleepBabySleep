export default (stateUI) => {
    const blockIntro = document.querySelector('.tracker');
    const blockIntroSteps = document.querySelector('.normalize');
    const arrow = document.querySelector('.normalize__arrow');
    const btnText = document.querySelector('.normalize__btnText');

    const prevVisibilityState = window.localStorage.getItem('introBlocks');
    console.log(prevVisibilityState);
    
    if (stateUI.introBlocks === 'visible') {
        window.localStorage.setItem('introBlocks', 'visible');
        blockIntro.classList.remove('hide-animation');
        blockIntro.classList.add('show-animation');
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
        btnText.textContent = 'Скрыть интро';

        // setTimeout(()=> {
        //     blockIntro.style.position = 'static';
        //     blockIntroSteps.style.position = 'relative';
        // }, 900)

    } else if (stateUI.introBlocks === 'hidden') {
        window.localStorage.setItem('introBlocks', 'hidden');

        blockIntro.classList.remove('show-animation');
        blockIntro.classList.add('hide-animation');
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
        btnText.textContent = 'Показать интро';
        // setTimeout(()=>{
        //     blockIntro.style.position = 'absolute';
        //     blockIntroSteps.style.position = 'absolute';
        //     blockIntro.style.top = '-100%';
        //     blockIntroSteps.style.top = '-55%';
        //     arrow.style.transform = 'rotate(0deg)';
        // }, 900)
    }
    console.log(window.localStorage.getItem('introBlocks'));
    
}