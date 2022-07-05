(function(){
  var $content = $('#share-options').detach();   // Убираем модальное окно со страницы

  $('#share').on('click', function() {           // Обработчик щелчка для модального окна
    modal.open({content: $content, width:340, height:300});
  });
}());