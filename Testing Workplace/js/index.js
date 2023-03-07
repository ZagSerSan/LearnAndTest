
const mainNavButtons = document.querySelectorAll('.main-navigation__button-item');

mainNavButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    mainNavButtons.forEach(item => {
      item.classList.remove('main-navigation__button-item_selected')
    });
    const {target} = event;
    
    let text = (target.textContent).trim();
    text = text.slice(0, text.length-1)
    console.log(text);
    target.textContent = text;

    target.classList.add('main-navigation__button-item_selected');

  });
});











