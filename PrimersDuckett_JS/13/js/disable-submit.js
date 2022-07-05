(function(){
  var form      = document.getElementById('newPwd');  // Форма
  var password  = document.getElementById('pwd');     // Поле ввода пароля
  var submit    = document.getElementById('submit');  // Кнопка отправки

  var submitted = false;                            // Была ли форма отправлена?
  submit.disabled = true;                           // Отключаем кнопку отправки
  submit.className = 'disabled';                    // Меняем стиль кнопки
  console.log(submit.className);
  
  // При вводе: проверяем, нужно ли включать кнопку отправки
  addEvent(password, 'input', function(e) {         // При вводе пароля
    var target = e.target || e.srcElement;          // Цель события
    submit.disabled = submitted || !target.value;   // Устанавливаем свойство disabled
    // Если форма была отправлена или если пароль не содержит значения, назначаем класс disabled
    submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
  }); 

  // При отправке: отключаем форму, чтобы ее нельзя было отправить повторно
  addEvent(form, 'submit', function(e) {            // При отправке
    if (submit.disabled || submitted) {             // Если отключена ИЛИ отправлена
      e.preventDefault();                           // Прекращаем отправку формы
      return;                                       // Прекращаем функцию обработки
    }                                               // Если нет, продолжаем...
    submit.disabled = true;                         // Отключаем кнопку отправки
    submitted = true;                               // Обновляем переменную submitted
    submit.className = 'disabled';                  // Обновляем стиль

    // Только для демонстрации: показываем то, что отправлялось, и отключаем отправку
    e.preventDefault();                             // Предотвращаем отправку формы
    alert('Пароль: ' + password.value);         // Показываем текст
  });
}());