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

    ['photoBaby', 'photoDad', 'photoMom'].forEach((inputName) => {
        form.elements[inputName].addEventListener('change', function () {
            if (!this.files.length) {
                return;
            }
            this.parentElement.querySelector('.registration-form__photo-comment').textContent = this.files[0].name;
        });
    });

    // коллекция валидаторов
    // поле validator - имплементация валидатора. Получает текстовое значение, возвращает true если значение корректно, иначе false
    // поле message - сообщение об ошибке если поле не валидно
    const validators = {
        required: {
            validator: value => !!value,
            message: 'Поле обязательно для заполнения!'
        },
        name: {
            validator: value => !value || /^[a-zA-Zа-яА-Я][a-zA-Z0-9а-яА-Я ]+$/.test(value),
            message: 'Используйте буквы, цифры, пробелы. Имя должно содержать не менее 2 символов'
        },
        email: {
            validator: value => !value || /^[A-Za-z0-9+_.-]+@(.+)$/.test(value),
            message: 'Неправильный формат электронной почты, например "username@domain.com"'
        },
        password: {
            validator: value => !value || value.length >= 8,
            message: 'Пароль должен быть не менее 8 символов длиной'
        },
        passwordConfirm: {
            validator: value => value === form.elements.passwordRegForm.value,
            message: 'Введенный пароль и подтверждение не совпадают' 
        }
    }

    submitRegFormBtn.addEventListener('click', (event) => {
        event.preventDefault();

        // пробегаем по всем полям формы, вызывая для каждого валидацию
        // для каждой итерации возвращаем true если поле валидно и false если нет
        // form.elements - не массив, а HTMLCollection, у него нет метода map()
        // поэтому следует пересобрать элементы в массив для дальнейшей потоковой обработки
        const valid = [...form.elements].map(field => {
            // получаем назначенные полю валидаторы
            const validatorNames = field.getAttribute('validators');
            if (!validatorNames) {
                // валидатор не назначен. поле валидно без проверок
                return true;
            }

            // получаем HTML елемент в котором отображается ошибка для поля, сбрасываем его состояние в дефолтное
            const errorElement = field.parentElement.querySelector('.registration-form__error');
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }

            // имена валидаторов перечислены через запятую
            // поэтому прежде всего разбиваем строку по запятым, и затем работаем с отдельными именами валидаторов
            return validatorNames.split(',')
                // подставляем вместо имени валидатора соответствующий блок из validators
                .map(name => validators[name])
                // если валидатор не найден, нам вернется undefined. Фильтруем результат чтобы остались только существующие валидаторы
                .filter(v => !!v)
                // применяем валидатор и заменяем его на результат его работы
                .map(validator => {
                    // применяем валидатор
                    const result = validator.validator(field.value);
                    // выставляем сообщение об ошибке если он вернул false
                    if (errorElement && !result) {
                        errorElement.textContent += '* ' + validator.message;
                        errorElement.style.display = 'flex';
                    }
                    // возвращаем результат работы валидатора (true / false)
                    return result;
                })
                // полученный массив результатов валидации объединяем через логическое "и"
                // результат - true если все результаты массива true, иначе false
                // если ни один валидатор не был применен (не нашлось валидаторов по заданным именам), вернем true
                .reduce((prev, cur) => prev && cur, true);
        })
        // объединяем результаты валидации всех полей через логическое "и"
        // в результате будет true если все поля успешно провалидированы, иначе false
        .reduce((prev, cur) => prev && cur, true);
        
        if (valid) {
            form.submit();
        }
    })
});
