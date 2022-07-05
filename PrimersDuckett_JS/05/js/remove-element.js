// Подготавливаем элемент к удалению из переменной.
var removeEl = document.getElementsByTagName('li')[3];

// Определяем элемент, содержащий удаляемый объект.
var containerEl = document.getElementsByTagName('ul')[0];

// Удаляем элемент.
containerEl.removeChild(removeEl);