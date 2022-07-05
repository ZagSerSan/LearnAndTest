var noteInput, noteName, textEntered, target;    // Объявляем переменные

noteName = document.getElementById('noteName');  // Элемент, содержащий заметку
noteInput = document.getElementById('noteInput');// Ввод для записи заметки

function writeLabel(e) {                         // Объявляем функцию
  if (!e) {                                      // Если объект события отсутствует
    e = window.event;                            // Используем вариант отката для Internet Explorer 5 – 8 
  }
  target = e.target || e.srcElement;             // Получаем цель события
  textEntered = target.value;                    // Значение данного элемента
  noteName.textContent = textEntered;            // Обновляем текст заметки
}


function recorderControls(e) {                   // Объявляем функцию recorderControls()
  if (!e) {                                      // Если объект события отсутствует
    e = window.event;                            // Используем резервный вариант для IE5-8
  }
  target = e.target || e.srcElement;             // Получаем целевой элемент
  if (e.preventDefault) {                        // Если поддерживается метод preventDefault()
    e.preventDefault();                          // Подавляем действие, заданное по умолчанию
  } else {                                       // Иначе
    event.returnValue = false;                   // Резервный вариант для IE: предотвращаем действие, заданное по умолчанию
  }

  switch(target.getAttribute('data-state')) {    // Получаем атрибут data-state
    case 'record':                               // Если его значение равно record
      record(target);                            // Вызываем функцию record()
      break;                                     // Выход из функции в позицию вызова
    case 'stop':                                 // Если значение равно stop
      stop(target);                              // Вызываем функцию stop()
      break;                                     // Выход из функции в позицию вызова
      // Здесь могут находиться другие кнопки...
  }
}

function record(target) {                        // Объявляем функцию
  target.setAttribute('data-state', 'stop');     // Задаем для атрибута data-state значение stop
  target.textContent = 'stop';                   // Задаем текст 'stop'
}

function stop(target) {
  target.setAttribute('data-state', 'record');   // Задаем для атрибута data-state значение record
  target.textContent = 'record';                 // Задаем текст 'record'
}

if (document.addEventListener) {                 // Если слушатель событий поддерживается
  document.addEventListener('click', function(e) {// Для каждого щелчка по объекту 
    recorderControls(e);                         // Вызываем функцию recorderControls()
  }, false);                                     // Захватываем результат на этапе всплытия события
  // Если событие ввода срабатывает на этапе ввода имени пользователя, вызываем функцию writeLabel()
  noteInput.addEventListener('input', writeLabel, false); 
} else {                                         // Иначе
  document.attachEvent('onclick', function(e) {  // Вариант отката для IE: any click
    recorderControls(e);                         // Вызываем функцию recorderControls()
  });
 // Если событие keyup срабатывает на этапе ввода имени пользователя, вызываем функцию writeLabel()
  noteInput.attachEvent('onkeyup', writeLabel);
}