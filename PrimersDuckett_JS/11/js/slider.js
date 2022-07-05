$('.slider').each(function() {              // Для каждого слайдера
  var $this   = $(this);                    // Текущий слайдер
  var $group  = $this.find('.slide-group'); // Получаем группу слайдов (контейнер)
  var $slides = $this.find('.slide');       // Создаем объект jQuery для хранения всех слайдов
  var buttonArray  = [];                    // Создаем массив для хранения кнопок навигации
  var currentIndex = 0;                     // Сохраняем индекс текущего слайда
  var timeout;                              // Устанавливаем интервал между автоперелистыванием

  function move(newIndex) {          // Меняем старый слайд на новый
    var animateLeft, slideLeft;      // Объявляем переменные

    advance();                       // При перемещении слайда опять вызываем advance()

    // Если это текущий слайд, ничего не делаем
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }

    buttonArray[currentIndex].removeClass('active'); // Удаляем класс из элемента
    buttonArray[newIndex].addClass('active');        // Добавляем класс к новому элементу

    if (newIndex > currentIndex) {   // Если новый элемент больше текущего
      slideLeft = '100%';            // Помещаем новый слайд вправо
      animateLeft = '-100%';         // Анимируем переход текущей группы влево
    } else {                         // Иначе
      slideLeft = '-100%';           // Помещаем новый слайд влево
      animateLeft = '100%';          // Анимируем переход текущей группы вправо
    }
    // Помещаем новый слайд слева (если меньше) или справа (если больше) от текущего
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() {    // Анимируем слайды и
      $slides.eq(currentIndex).css( {display: 'none'} ); // Прячем предыдущий слайд
      $slides.eq(newIndex).css( {left: 0} ); // Устанавливаем позицию нового элемента
      $group.css( {left: 0} );               // Устанавливаем позицию группы слайдов
      currentIndex = newIndex;               // Присваиваем currentIndex новое изображение
    });
  }

  function advance() {                     // Задает интервал между сменой слайдов
    clearTimeout(timeout);                 // Очищаем предыдущий интервал
    timeout = setTimeout(function() {      // Устанавливаем новый таймер
      if (currentIndex < ($slides.length - 1)) { // Если слайд < количества слайдов
        move(currentIndex + 1);            // Переходим к следующему слайду
      } else {                             // Иначе
        move(0);                           // Переходим к первому слайду
      }
    }, 4000);                              // Сколько миллисекунд будет ждать таймер
  }

  $.each($slides, function(index) {
    // Создаем элемент button для кнопки
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {    // Если индекс принадлежит текущему элементу
      $button.addClass('active');    // Добавляем класс active
    }
    $button.on('click', function() { // Создаем обработчик событий для кнопки
      move(index);                   // Он вызывает функцию move()
    }).appendTo('.slide-buttons');   // Добавляет кнопки в контейнер и
    buttonArray.push($button);       // В массив
  });

  advance();                          


});