const rangeEl = document.querySelector('#font-size-control');
const outputEl = document.querySelector('#text');

rangeEl.addEventListener('input', event => {
    outputEl.style.fontSize = `${event.currentTarget.value}px`;
});

