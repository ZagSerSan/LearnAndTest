var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Добрый вечер!';
} else if (hourNow > 12) {
    greeting = 'Добрый день!';
} else if (hourNow > 0) {
    greeting = 'Доброе утро!';
} else {
    greeting = 'Приветствуем!';
}

document.write('<h3>' + greeting + '</h3>');