var width = 12;                                     // переменная width
var height = 'test';                                // переменная height

function calculateArea(width, height) {
  try {
    var area = width * height;                      // Пытаемся вычислить площадь
    if (!isNaN(area)) {                             // Если это число
      return area;                                  // Возвращаем площадь
    } else {                                        // Иначе генерируем ошибку
      throw new Error('calculateArea() получила некорректное число');
    }
  } catch(e) {                                     // Если произошла ошибка
    console.log(e.name + ' ' + e.message);          // Выводим ее в консоли
    return 'Не удалось вычислить площадь.'; // Показываем пользователю сообщение
  }
}

// ПЫТАЕМСЯ ВЫВЕСТИ ПЛОЩАДЬ НА СТРАНИЦЕ
document.getElementById('area').innerHTML = calculateArea(width, height);