(function(){ 
  var form = document.getElementById('login');       // Получаем элемент form

  addEvent(form, 'submit', function(e) {             // При отправке формы
    e.preventDefault();                              // Останавливаем отправку
    var elements = this.elements;                    // Получаем все элементы формы
    var username = elements.username.value;          // Получаем введенное имя пользователя
    var msg      = 'Добро пожаловать, ' + username;  // Создаем приветствие
    document.getElementById('main').textContent = msg; // Выводим приветствие
  });
}());