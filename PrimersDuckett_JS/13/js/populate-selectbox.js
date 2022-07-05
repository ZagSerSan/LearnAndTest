(function() {
  var type  = document.getElementById('equipmentType');// Список типов оборудования
  var model = document.getElementById('model');        // Список моделей оборудования
  var cameras = {                                      // Объект с камерами
    bolex: 'Bolex Paillard H8',
    yashica: 'Yashica 30',
    pathescape: 'Pathescape Super-8',
    canon: 'Canon 512'
  };
  var projectors = {                                  // Объект с проекторами
    kodak: 'Kodak Instamatic M55',
    bolex: 'Bolex Sound 715',
    eumig: 'Eumig Mark S',
    sankyo: 'Sankyo Dualux'
  };

  // КОГДА ПОЛЬЗОВАТЕЛЬ ИЗМЕНЯЕТ СПИСОК С ТИПАМИ
  addEvent(type, 'change', function() {
    if (this.value === 'choose') {                // Выбор не был сделан
      model.innerHTML = '<option>Выберите модель</option>';
      return;                                     // Не нужно продолжать дальше
    }
    var models = getModels(this.value);           // Выбираем подходящий объект

    // ПЕРЕБИРАЕМ СОДЕРЖИМОЕ ОБЪЕКТА ДЛЯ СОЗДАНИЯ ВАРИАНТОВ
    var options = '<option>Выберите модель</option>';
    var key;
    for (key in models) {                     // Перебираем models
      options += '<option value="' + key + '">' + models[key] + '</option>';
    } // Если пункт может содержать кавычки, ключ должен быть экранирован
    model.innerHTML = options;                    // Обновляем список
  });

  function getModels(equipmentType) {
    if (equipmentType === 'cameras') {            // Если выбраны камеры
      return cameras;                             // Возвращаем объект cameras
    } else if (equipmentType === 'projectors') {  // Если выбраны проекторы
      return projectors;                          // Возвращаем объект projectors
    }
  }
}());