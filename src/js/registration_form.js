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
        regFormContainer.scrollTo(0,0);
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

    for(const element of form.elements) {
        if (element.getAttribute('type') === 'file') {
            element.addEventListener('change', function() {
                if (this.files.length) {
                    this.parentElement.querySelector('.registration-form__photo-comment').textContent = this.files[0].name;
                }
            })
        }
    }

    // коллекция валидаторов
    // поле validator - метод, принимает текстовое значение, возвращает true если значение корректно, иначе false
    // поле message - сообщение об ошибке если поле не валидно
    const validators = {
        required: {
            validator: value => !!value,
            message: 'Поле обязательно для заполнения'
        },
        name: {
            validator: value => !value || /^[a-zA-Zа-яА-Я][a-zA-Z0-9а-яА-Я ]+$/.test(value),
            message: 'Используйте буквы, цифры, пробелы. Имя должно содержать не менее 2 символов'
        },
        email: {
            validator: value => !value || /^[A-Za-z0-9+_.-]+@(.+)$/.test(value),
            message: 'Введите почту в формате user@domain.com'
        },
        password: {
            validator: value => !value || value.length >= 8,
            message: 'Пароль должен содержать не менее 8 символов'
        },
        passwordConfirm: {
            validator: value => value === form.elements.passwordRegForm.value,
            message: 'Введенный пароль и подтверждение не совпадают' 
        }
    }

    submitRegFormBtn.addEventListener('click', (event) => {
        event.preventDefault();

        // пробегаем по всем полям формы, для каждой итерации возвращаем true если поле валидно и false если нет
        // form.elements - пересобираем элементы в массив для дальнейшей обработки
        // получаем назначенные полю валидаторы

        const valid = [...form.elements].map(element => {
            const validatorNames = element.getAttribute('validators');
            if (!validatorNames) {
                // валидатор не назначен. поле валидно без проверок
                return true;
            }

            const errorElement = element.parentElement.querySelector('.registration-form__error');
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }

            // имена валидаторов перечислены через запятую, разбиваем
            // если валидатор не найден, вернется undefined, фильтруем результат чтобы остались только существующие валидаторы
            // применяем валидатор и заменяем его на результат его работы
            // возвращаем результат работы валидатора (true / false)
            // полученный массив результатов валидации объединяем через логическое "и"
            // результат - true если все результаты массива true, иначе false
            // если ни один валидатор не был применен (не нашлось валидаторов по заданным именам), вернем true
            // объединяем результаты валидации всех полей через логическое "и"
            // в результате будет true если все поля успешно провалидированы, иначе false

            return validatorNames.split(',')
                .map(name => validators[name])
                .filter(item => !!item)
                .map(validator => {
                    const result = validator.validator(element.value);
                    if (errorElement && !result) {
                        errorElement.textContent += '*' + validator.message;
                        errorElement.style.display = 'flex';
                    }
                    return result;
                })
                .reduce((prev, cur) => prev && cur, true);
        })
        .reduce((prev, cur) => prev && cur, true);
        
        if (valid) {
            form.submit();
        }
    })
});
