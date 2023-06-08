let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', (event) => {
    valueEl.textContent = counterValue -= 1;
});

incrementBtn.addEventListener('click', (event) => {
    valueEl.textContent = counterValue += 1;
});