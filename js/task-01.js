const list = document.querySelector('#categories');
const listItems = document.querySelectorAll('.item');

const numberOfCategories = [...listItems].length;
console.log(`Number of categories: ${numberOfCategories}`);

listItems.forEach(category => console.log(`Category: ${category.firstElementChild.textContent} 
Elements: ${category.lastElementChild.children.length}`));
