function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const parentDivElem = document.querySelector('#boxes');

function setColor() {
  const newDivElements = parentDivElem.querySelectorAll('div');

  newDivElements.forEach(childDivElement => {
    childDivElement.style.backgroundColor = getRandomHexColor();
  });
}

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return;
  }

  parentDivElem.innerHTML = '';

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
  setColor();
  createBoxes(inputNum.value);
});
destroyBtn.addEventListener('click', destroyElem);
