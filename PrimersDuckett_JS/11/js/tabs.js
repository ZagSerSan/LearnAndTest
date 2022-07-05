$('.tab-list').each(function(){                   // Находим список вкладок
  var $this = $(this);                            // Сохраняем этот список
  var $tab = $this.find('li.active');             // Получаем активный элемент списка
  var $link = $tab.find('a');                     // Получаем ссылку из активной вкладки
  var $panel = $($link.attr('href'));             // Получаем активную панель

  $this.on('click', '.tab-control', function(e) { // При щелчке по вкладке
    e.preventDefault();                           // Отменяем действие ссылки
    var $link = $(this),                          // Сохраняем текущую ссылку
        id = this.hash;                           // Получаем href нажатой вкладки

    if (id && !$link.is('.active')) {             // Если уже не активны
      $panel.removeClass('active');               // Деактивируем панель
      $tab.removeClass('active');                 // Деактивируем вкладку

      $panel = $(id).addClass('active');          // Делаем новую панель активной
      $tab = $link.parent().addClass('active');   //  Делаем новую вкладку активной
    }
  });
});