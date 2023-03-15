/// Task 1
const categories = document.getElementById('categories');
console.log(`Number of categories : ${categories.children.length}`);
const arr = [];
const elementLiH2 = document.querySelectorAll('.item');
elementLiH2.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.children.length}`)
}) 
/// Task 2

