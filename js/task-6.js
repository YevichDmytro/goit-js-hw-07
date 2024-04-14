function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const parentDivElem = document.querySelector('#boxes');
const copyInputValue = inputNum.value.slice();

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    // return alert('Число має бути в межах від 1 до 100');
  }

  for (let i = 0; i < amount; i++) {
    const newDivElem = document.createElement('div');
    parentDivElem.append(newDivElem);

    const listOfNewDivElements = parentDivElem.querySelectorAll('div');

    listOfNewDivElements.forEach((childDivElement, i) => {
      let num = 0;

      if (i === listOfNewDivElements.length - 1) {
        num = (listOfNewDivElements.length - 1) * 10 + 30;

        childDivElement.style.width = `${num}px`;
        childDivElement.style.height = `${num}px`;
        childDivElement.style.backgroundColor = getRandomHexColor();
      }
    });
  }

  inputNum.value = '';
}

const destroyElem = event => {
  parentDivElem.innerHTML = '';
  inputNum.value = '';
};

createBtn.addEventListener('click', event => {
  createBoxes(inputNum.value);
});
destroyBtn.addEventListener('click', destroyElem);
