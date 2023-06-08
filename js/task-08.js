const formEl = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if (formElements.email.value === '' || formElements.password.value === '') {
        alert('Все поля должны быть заполнены!');
    } else {
        const email = formElements.email.value;
        const password = formElements.password.value;

        const formData = {
            email,
            password
        }

        console.log(formData);
        event.currentTarget.reset();
    }
}

formEl.addEventListener('submit', onFormSubmit);


