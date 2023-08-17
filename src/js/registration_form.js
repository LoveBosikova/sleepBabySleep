window.addEventListener('load', () => {
    const openRegForm = document.querySelector('.header__sign-in');
    const modalRegForm = document.querySelector('.registration-form__modal');
    const closeRegForm = document.querySelector('.registration-form__close-icon');

    openRegForm.addEventListener('click', () => {
        modalRegForm.style.display = 'flex';
    });

    closeRegForm.addEventListener('click', () => {
        modalRegForm.style.display = 'none';
    });

    ['photoBaby', 'photoDad', 'photoMom'].forEach((inputName) => {
        document.forms.registrationForm.elements[inputName].addEventListener('change', function () {
            if (!this.files.length) {
                return;
            }
            this.parentElement.querySelector('span').textContent = this.files[0].name;
        });
    });
});
