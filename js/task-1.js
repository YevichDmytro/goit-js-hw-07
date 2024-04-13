const countOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${countOfCategories.length}`);

countOfCategories.forEach(element => {
  const itemHeader = element.querySelector('h2');
  console.log(`Category: ${itemHeader.textContent}`);

  const countOfListElements = element.querySelectorAll('li');
  console.log(`Elements: ${countOfListElements.length}`);
});
