//TODO_TEMP ==================================================
/* 
   1 непоказ слайдера первого +
   2 Пропорциональное изменение высоты изображения относительно его ширины.
*/

let item = document.querySelector('.item');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');

setTimeout(() => {
   modal.style.display = 'none';
   modal.style.opacity = '1';
}, 100);


item.addEventListener('click', () => {
   modal.style.display = 'block';
});

close.addEventListener('click', () => {
   modal.style.display = 'none';
});

$(function() {

   $('.slider').slick({
      // arrows: false
   });


});







