// ПРИМЕЧАНИЕ: Этот сценарий не работает в автономном режиме во всех браузерах.
// IВ Chrome при попытке запуска сценария вы получите сообщение об ошибке:
//       Origin 'null' is therefore not allowed access.
// Вы можете запустить данный сценарий на собственном сервере.

$('nav a').on('click', function(e) {                 // Пользователь щелкает по ссылке nav
  e.preventDefault();                                // Останавливаем загрузку новой сcылки
  var url = this.href;                               // Получаем значение href

  $('nav a.current').removeClass('current');         // Удаляем текущий индикатор
  $(this).addClass('current');                       // Новый текущий индикатор

  $('#container').remove();                          // Удаляем старое содержимое
  $('#content').load(url + ' #container').hide().fadeIn('slow'); // Новое содержимое
});