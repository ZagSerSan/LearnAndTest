$('.accordion').on('click', '.accordion-control', function(e){ // При щелчке
  e.preventDefault();                    // Отменяет стандартное действие кнопки
  $(this)                                // Получаем нажатый пользователем элемент
    .next('.accordion-panel')            // Выбираем следующую панель
    .not(':animated')                    // Если она не в процессе анимации
    .slideToggle();                      // Выводим или скрываем ее с помощью slideToggle()
});