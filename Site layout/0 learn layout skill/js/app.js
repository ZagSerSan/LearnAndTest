//TODO_TEMP ==================================================
/* 
   1 Пропорциональное изменение высоты изображения относительно его ширины.
*/


let item = document.querySelector('.item');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');

setTimeout(() => {
   // modal.style.display = 'none';
   // modal.style.transform = 'scale(0)';
   modal.style.opacity = '1';
}, 1000);


item.addEventListener('click', () => {
   modal.classList.add('active');
   // modal.style.display = 'block';
});

close.addEventListener('click', () => {
   modal.classList.remove('active');
   // modal.style.display = 'none';
});

$(function() {

   $('.slider').slick({
      // arrows: false
   });

});





