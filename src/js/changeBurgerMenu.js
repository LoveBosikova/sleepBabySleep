function changeBurgerMenu(burgerState) {
    const btn = document.getElementById('burger__btn');
    const headerLogo = document.querySelector('.header__logo');
    const headerBtns = document.querySelector('.header__buttons');
    const burgerMenu = document.querySelector('.burger__menu')

    if (burgerState == 'close') {
        headerLogo.style.display = 'block';
        headerBtns.style.display = 'block';
        burgerMenu.style.display = 'none';
        btn.innerHTML = ` <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21.8189" cy="21.6059" r="20.7689" transform="rotate(-0.588053 21.8189 21.6059)"
            fill="#26283D" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.5189 21.7126C11.5189 21.2708 11.8771 20.9126 12.3189 20.9126H31.3189C31.7607 20.9126 32.1189 21.2708 32.1189 21.7126C32.1189 22.1544 31.7607 22.5126 31.3189 22.5126H12.3189C11.8771 22.5126 11.5189 22.1544 11.5189 21.7126Z"
            fill="white" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.5189 12.8503C11.5189 12.4085 11.8771 12.0503 12.3189 12.0503H31.3189C31.7607 12.0503 32.1189 12.4085 32.1189 12.8503C32.1189 13.2921 31.7607 13.6503 31.3189 13.6503H12.3189C11.8771 13.6503 11.5189 13.2921 11.5189 12.8503Z"
            fill="white" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.5189 30.5761C11.5189 30.1343 11.8771 29.7761 12.3189 29.7761H31.3189C31.7607 29.7761 32.1189 30.1343 32.1189 30.5761C32.1189 31.018 31.7607 31.3761 31.3189 31.3761H12.3189C11.8771 31.3761 11.5189 31.018 11.5189 30.5761Z"
            fill="white" />
    </svg>`;
    } else {
        headerLogo.style.display = 'none';
        headerBtns.style.display = 'none';
        burgerMenu.style.display = 'block';
        btn.innerHTML = `<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.805 14.2832C26.9838 21.4825 23.4338 28.5137 15.5745 28.5137C7.71525 28.5137 0.852539 20.7349 0.852539 12.8757C4.48065 6.30003 7.71525 0.0527344 15.5745 0.0527344C24.9238 2.51207 29.805 6.42393 29.805 14.2832Z" fill="#096BA2"/>
        <path d="M29.805 14.2832C26.9838 21.4825 23.4338 28.5137 15.5745 28.5137C7.71525 28.5137 0.852539 20.7349 0.852539 12.8757C4.48065 6.30003 7.71525 0.0527344 15.5745 0.0527344C24.9238 2.51207 29.805 6.42393 29.805 14.2832Z" fill="#2F80EC"/>
        <path d="M10.2558 19.0514C10.1278 19.1837 10.1314 19.3948 10.2638 19.5227C10.3961 19.6507 10.6072 19.6471 10.7351 19.5147L20.4018 9.51473C20.5297 9.38236 20.5261 9.17133 20.3938 9.04339C20.2614 8.91542 20.0504 8.91901 19.9224 9.05136L10.2558 19.0514Z" fill="white"/>
        <path d="M19.9224 19.5147C20.0504 19.6471 20.2614 19.6506 20.3938 19.5227C20.5261 19.3948 20.5297 19.1837 20.4018 19.0514L10.7351 9.05136C10.6072 8.91901 10.3961 8.91543 10.2638 9.04338C10.1314 9.17132 10.1278 9.38235 10.2558 9.51471L19.9224 19.5147Z" fill="white"/>
        </svg> `;
        btn.style.alignSelf = 'flex-end';

    }
}

export default changeBurgerMenu;