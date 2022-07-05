// Создаем переменную для хранения некоторого числа в диапазоне от 1 до 10
var randomNum = Math.floor((Math.random() * 10) + 1);

// Создаем переменную el для записи элемента с идентификатором info
var el = document.getElementById('info');
// Записываем число в элемент
el.innerHTML = '<h2>случайное число</h2><p>' + randomNum + '</p>';