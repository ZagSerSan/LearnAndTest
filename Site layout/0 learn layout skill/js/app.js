//TODO_TEMP ==================================================
/* 
   1 Пропорциональное изменение высоты изображения относительно его ширины.
*/

let item = document.querySelector('.item');
let modal = document.querySelector('.modal');
let modal_bg = document.querySelector('.modal-bg');
let close = document.querySelector('.close');


item.addEventListener('click', () => {
   modal.classList.add('active');

   modal_bg.classList.add('active');
   setTimeout(() => {
      modal_bg.classList.add('bg');
   }, 10);
});

close.addEventListener('click', () => {
   modal.classList.remove('active');

   modal_bg.classList.remove('bg');
   setTimeout(() => {
      modal_bg.classList.remove('active');
   }, 100);
});

$(function() {
   $('.slider').slick({
      // arrows: false
   });
});





