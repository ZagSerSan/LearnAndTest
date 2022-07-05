var firstItem = document.getElementById('one'); // Получаем первый элемент списка
if (firstItem.hasAttribute('class')) {          // Если у него есть атрибут class 
  var attr = firstItem.getAttribute('class');   // Получаем атрибут

  // Добавляем значение атрибута после списка
  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>Первому элементу присвоен класс: ' + attr + '</p>';

}