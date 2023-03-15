const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.querySelector('#ingredients');

ingredients.forEach(item => {
  const liEl = document.createElement('li');
  liEl.className = "item";
  liEl.innerHTML = item;

  ingredientsUl.append(liEl);
})