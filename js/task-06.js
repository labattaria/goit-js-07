const validationInputEl = document.querySelector('#validation-input');

const onValidationInputBlur = event => {
    if (event.currentTarget.value.length == validationInputEl.dataset.length) {
        validationInputEl.classList.add('valid');

        if (validationInputEl.classList.contains('invalid')) {
            validationInputEl.classList.remove('invalid')
        }
        
    } else {
        validationInputEl.classList.add('invalid')

        if (validationInputEl.classList.contains('valid')) {
            validationInputEl.classList.remove('valid')
        }
    }
};

validationInputEl.addEventListener('blur', onValidationInputBlur);

