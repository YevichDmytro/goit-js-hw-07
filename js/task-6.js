function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('#controls input');
const createElemBtn = document.querySelector('button[data-create]');
const destroyElemBtn = document.querySelector('button[data-destroy]');
const boxForNewElements = document.querySelector('#boxes');
let count = inputNumber.value;

function createBoxes(amount) {
  // if (amount < 1 || amount > 100) {
  //   alert('Число має бути в межах від 1 до 100');
  //   return;
  // }
  console.log(1);

  for (let i = 0; i < amount; i++) {
    const newElem = document.createElement('div');
    boxForNewElements.append(newElem);

    const lastCreatedElem = boxForNewElements.querySelectorAll('div');

    lastCreatedElem.forEach((div, i) => {
      let num = 0;
      if (i === lastCreatedElem.length - 1) {
        num = (lastCreatedElem.length - 1) * 10 + 30;

        div.style.width = `${num}px`;
        div.style.height = `${num}px`;
        div.style.backgroundColor = getRandomHexColor();
      }
    });
  }
  inputNumber.value = '';
}

// const createElem = event => {
//   if (inputNumber.value < 1 || inputNumber.value > 100) {
//     alert('Число має бути в межах від 1 до 100');
//     return;
//   }

// for (let i = 0; i < inputNumber.value; i++) {
//   const newElem = document.createElement('div');
//   boxForNewElements.append(newElem);

//   const lastCreatedElem = boxForNewElements.querySelectorAll('div');

// for (let i = 0; i < lastCreatedElem.length; i++) {
//   let num = 0;
//   if (i === lastCreatedElem.length - 1) {
//     num = (lastCreatedElem.length - 1) * 10 + 30;

//     lastCreatedElem[lastCreatedElem.length - 1].style.width = `${num}px`;
//     lastCreatedElem[lastCreatedElem.length - 1].style.height = `${num}px`;
//     lastCreatedElem[lastCreatedElem.length - 1].style.backgroundColor =
//       getRandomHexColor();
//   }
// }

// lastCreatedElem.forEach((div, i) => {
//   let num = 0;
//   if (i === lastCreatedElem.length - 1) {
//     num = (lastCreatedElem.length - 1) * 10 + 30;

//     div.style.width = `${num}px`;
//     div.style.height = `${num}px`;
//     div.style.backgroundColor = getRandomHexColor();
//   }
// });
// }

// if (boxForNewElements.scrollHeight > boxForNewElements.clientHeight) {
//   boxForNewElements.scrollTop =
//     boxForNewElements.scrollHeight - boxForNewElements.clientHeight;
// }
//   inputNumber.value = '';
// }

const destroyElem = event => {
  boxForNewElements.innerHTML = '';
  inputNumber.value = '';
};

createElemBtn.addEventListener('click', createBoxes(count));
destroyElemBtn.addEventListener('click', destroyElem);
