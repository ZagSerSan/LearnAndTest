function getTarget(e) {                          // Объявляем функцию
  if (!e) {                                      // Если объект события отсутствует 
    e = window.event;                            // Используем объект event, применявшийся в старых версиях IE 
  }
  return e.target || e.srcElement;               // Получаем цель события
}

function itemDone(e) {                           // Объявляем функцию
  // Удаляем элемент из списка
  var target, elParent, elGrandparent;           // Объявляем переменные
  target = getTarget(e);                         // Получаем ссылку того элемента, по которому был сделан щелчок
  elParent = target.parentNode;                  // Получаем соответствующий элемент из этого списка
  elGrandparent = target.parentNode.parentNode;  // Получаем соответствующий список
  elGrandparent.removeChild(elParent);           // Удаляем элемент из списка

  // Запрещаем переход по данной ссылке куда-либо с текущей страницы
  if (e.preventDefault) {                        // Если метод preventDefault() применим 
    e.preventDefault();                          // Используем preventDefault() 
  } else {                                       // Иначе
    e.returnValue = false;                       // Используем прием для старых версий IE 
  }
}

// Создаем слушатели событий для вызова функции itemDone() при щелчке
var el = document.getElementById('shoppingList');// Получаем список покупок
if (el.addEventListener) {                       // Если слушатели событий применимы
  el.addEventListener('click', function(e) {     // Добавляем слушатель событий щелчка
    itemDone(e);                                 // Вызывается функция itemDone()
  }, false);                                     // В потоке выполнения программы наступает фаза всплывания событий
} else {                                         // Иначе
  el.attachEvent('onclick', function(e) {        // Используем модель, применявшуюся в старых версиях IE: onclick
    itemDone(e);                                 // Вызываем функцию itemDone()
  });
}