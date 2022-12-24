let test = document.querySelector('.test');

//  var x = window.matchMedia("(max-width: 1000px)")
// //  myFunction(x) // Вызов функции прослушивателя во время выполнения
//  window.addEventListener('resize', function myFunction(x) {
//    if (x.matches) { // Если медиа запрос совпадает
//      test.style.backgroundColor = "yellow";
//    } else {
//      test.style.backgroundColor = "green";
//    }
//  }); // Присоединить функцию прослушивателя при изменении состояния


/*
function checkMediaQuery() {
   if (window.innerWidth < 1000) {
     test.style.backgroundColor = "yellow";
   } else {
     test.style.backgroundColor = "green";
   }
}
window.addEventListener('resize', checkMediaQuery);
*/

window.addEventListener('resize', function name() {
   if (window.matchMedia("(max-width: 1000px)").matches) {
      test.style.backgroundColor = "yellow";
   } else {
      test.style.backgroundColor = "green";
   }
});


