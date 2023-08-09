const render = (state) => {
    // Это пример
    const submit = document.querySelector(/* .... */);
    const input = document.querySelector(/* .... */);
    
    submit.disabled = !state.registrationForm.valid;

    if (state.registrationForm.valid) {
        input.style.border = null;
    } else {
        input.style.border = 'thick solid red';
    }
};