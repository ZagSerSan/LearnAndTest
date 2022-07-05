// Вспомогательная функция для добавления обработчика событий
function addEvent (el, event, callback) {
  if ('addEventListener' in el) {                  // Если addEventListener работает
    el.addEventListener(event, callback, false);   // Используем его
  } else {                                         // В противном случае
    el['e' + event + callback] = callback;         // Создаем специальный код для IE
    el[event + callback] = function () {
      el['e' + event + callback](window.event);
    };
    el.attachEvent('on' + event, el[event + callback]); // Используем attachEvent()
  }  // для вызова второй функции, которая потом вызывает первую
}

// Вспомогательная функция для удаления обработчика событий
function removeEvent(el, event, callback) {
  if ('removeEventListener' in el) {                      // If removeEventListener works
    el.removeEventListener(event, callback, false);       // Используем его 
  } else {                                                // В противном случае
    el.detachEvent('on' + event, el[event + callback]);   // Создаем специальный код для IE
    el[event + callback] = null;
    el['e' + event + callback] = null;
  }
}

