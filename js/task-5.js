function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

const colorHandler = event => {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  colorValue.textContent = randomHexColor.toLocaleUpperCase();

  // Присвоювання результату роботи getRandomHexColor() кнопці button.change-color
  // щоб колір кнопки був такий як колір фону body
  changeColorBtn.style.backgroundColor = randomHexColor;
};

changeColorBtn.addEventListener('click', colorHandler);

// Додавання(і видалення) класу pressed-btn до(від) списку класів кнопки button.change-color
changeColorBtn.addEventListener('mousedown', event => {
  changeColorBtn.classList.add('pressed-btn');
});
changeColorBtn.addEventListener('mouseup', event => {
  changeColorBtn.classList.remove('pressed-btn');
});

// Кнопка для копіювання кольору в HEX форматі
changeColorBtn.insertAdjacentHTML(
  'afterend',
  `<button type="button" class="copy-btn">Copy</button>`
);

const copyText = () => {
  if (colorValue.textContent === '-') {
    alert('Колір для копіювання відсутній');
  } else {
    alert('Колір ' + colorValue.textContent + ' скопійовано!');
    navigator.clipboard.writeText(colorValue.textContent);
  }
};

const copyBtn = document.querySelector('.copy-btn');
copyBtn.addEventListener('click', copyText);

copyBtn.addEventListener('mousedown', event => {
  copyBtn.classList.add('pressed-btn');
});
copyBtn.addEventListener('mouseup', event => {
  copyBtn.classList.remove('pressed-btn');
});
