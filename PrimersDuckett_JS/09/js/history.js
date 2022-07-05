// ПРИМЕЧАНИЕ: Поскольку в примере используется jQuery-метод load() (изученный в предыдущей главе),
// сценарий может не работать в некоторых браузерах.
// Вы можете запустить данный сценарий на собственном сервере

$(function() {                                  // Дерево DOM загружено
  function loadContent(url){                    // Загружаем на страницу новые данные
    $('#content').load(url + ' #container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e) {          // Обработчик щелчка  
    e.preventDefault();                         // Предотвращаем загрузку новой страницы
    var href = this.href;                       // Получаем атрибут href ссылки
    var $this = $(this);                        // Сохраняем ссылку в объекте jQuery
    $('a').removeClass('current');              // Удаляем из ссылок класс current
    $this.addClass('current');                  // Обновляем текущую ссылку
    loadContent(href);                          // Вызываем функцию для загрузки данных
    history.pushState('', $this.text, href);    // Обновляем журнал посещений
  });

  window.onpopstate = function() {              // Обрабатываем кнопки вперед/назад
    var path = location.pathname;               // Получаем путь 
    loadContent(path);                          // Вызываем функцию для загрузки страницы
    var page = path.substring(location.pathname.lastIndexOf('/')+1);
    $('a').removeClass('current');              // Удаляем из ссылок класс current
    $('[href="' + page + '"]').addClass('current'); // Обновляем текущую ссылку
  };
});