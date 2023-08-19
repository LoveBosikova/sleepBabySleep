window.addEventListener('load', () => {
    const openRegFormHeader = document.querySelector('.header__sign-in');
    const openRegFormFooter = document.querySelector('.footer__login');
    const modalRegForm = document.querySelector('.registration-form__modal');
    const closeRegFormBtn = document.querySelector('.registration-form__close-icon');
    const submitRegFormBtn = document.querySelector('.registration-form__submit');
    const form = document.forms.registrationForm;
    const regFormContainer = document.querySelector('.registration-form__container');

    function openRegForm () {
        modalRegForm.style.display = 'flex';
        setTimeout(() => modalRegForm.classList.add('registration-form__modal-open'), 0);
        form.elements.babyName.focus();
    }

    function closeRegForm () {
            modalRegForm.addEventListener('transitionend', function handleTransitionEnd() {
            modalRegForm.removeEventListener('transitionend', handleTransitionEnd);
            modalRegForm.style.display = 'none';
        });
    
        modalRegForm.classList.remove('registration-form__modal-open');
    }

    modalRegForm.addEventListener('click', closeRegForm);
    closeRegFormBtn.addEventListener('click', closeRegForm);
    openRegFormHeader.addEventListener('click', openRegForm);
    openRegFormFooter.addEventListener('click', openRegForm);
    regFormContainer.addEventListener('click', (e) => e.stopPropagation());

    ['photoBaby', 'photoDad', 'photoMom'].forEach((inputName) => {
        form.elements[inputName].addEventListener('change', function () {
            if (!this.files.length) {
                return;
            }
            this.parentElement.querySelector('span').textContent = this.files[0].name;
        });
    });

    submitRegFormBtn.addEventListener('click', (event) => {
        event.preventDefault();
    })
});
