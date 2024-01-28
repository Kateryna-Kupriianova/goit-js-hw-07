// Отримуємо список категорій (елемент ul#categories)
const categoriesList = document.getElementById('categories');

// Отримуємо список елементів li.item у списку категорій
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій в консоль
console.log(`Number of categories: ${categoryItems.length}`);

// Перебираємо кожен елемент li.item у списку категорій
categoryItems.forEach((categoryItem) => {
  // Отримуємо текст заголовка категорії (тег h2)
  const categoryName = categoryItem.querySelector('h2').textContent;

  // Отримуємо список елементів li у кожній категорії
  const categoryElements = categoryItem.querySelectorAll('ul li');

  // Виводимо інформацію про категорію в консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
