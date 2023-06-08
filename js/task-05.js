const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const onInputChange = event => {
    // if (event.currentTarget.value === '') {
    //     outputEl.textContent = 'Anonymous';
    // } else {
    //     outputEl.textContent = event.currentTarget.value;
    // }

    event.currentTarget.value === '' ? outputEl.textContent = 'Anonymous' : outputEl.textContent = event.currentTarget.value;
};

inputEl.addEventListener('input', onInputChange);

