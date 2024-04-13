const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

const inputHandler = event => {
  const inputTextValue = event.currentTarget.value.trim();
  outputText.textContent = inputTextValue;

  if (inputTextValue === '') {
    outputText.textContent = 'Anonymous';
  }
};

inputText.addEventListener('input', inputHandler);
inputText.addEventListener('blur', inputHandler);

//Вирішив додати кнопку для очищення тексту в input
const header = document.querySelector('.title');
const btnMarkup = `<button type="button" class="reset-btn">Reset input text</button>`;

header.insertAdjacentHTML('afterend', btnMarkup);

const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', event => {
  inputText.value = '';
  outputText.textContent = 'Anonymous';
});
resetBtn.addEventListener('mousedown', event => {
  resetBtn.classList.add('btn-mouseDown-click');
});
resetBtn.addEventListener('mouseup', event => {
  resetBtn.classList.remove('btn-mouseDown-click');
});
