
const h3 = document.querySelector('h3');
const allButtons = document.querySelectorAll('.button');
const buttonBack = document.querySelector('.button-back');
const buttonSum = document.querySelector('.button-sum');

allButtons.forEach(button => {
   button.addEventListener('click', (e) => {
      e.preventDefault();

      if (h3.textContent === '0') {
         h3.textContent = button.dataset.number
      } else {
         h3.textContent += button.dataset.number
      }
   });
})

buttonBack.addEventListener('click', (e) => {
   e.preventDefault();

   if (h3.textContent.length == 1) {
      h3.textContent = '0'
   } else {
      h3.textContent = h3.textContent.slice(0, h3.textContent.length-1)  
   }
});

buttonSum.addEventListener('click', (e) => {
   e.preventDefault();

   console.log(h3.textContent);
   h3.textContent = 0
});