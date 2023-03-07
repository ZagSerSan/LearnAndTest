
const mainNavButtons = document.querySelectorAll('.main-navigation__button-item');

mainNavButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    mainNavButtons.forEach(item => {
      item.classList.remove('main-navigation__button-item_selected')
    });
    const {target} = event;
    target.classList.add('main-navigation__button-item_selected');

  });
});











