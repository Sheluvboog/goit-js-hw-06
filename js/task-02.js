const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.querySelector('#ingredients');

const listItems = [];

ingredients.forEach(item => {
  const liEl = document.createElement('li');
  liEl.className = "item";
  liEl.innerHTML = item;

  listItems.push(liEl);
})

ingredientsUl.append(...listItems);