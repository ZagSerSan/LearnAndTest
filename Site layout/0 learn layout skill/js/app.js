
// btns
var btn_all = document.getElementById('btn_all');
var btn_app = document.getElementById('btn_app');
var btn_website = document.getElementById('btn_website');
var btn_interaction = document.getElementById('btn_interaction');

// contebts
var content_app = document.querySelectorAll('#content_app');
var content_website = document.querySelectorAll('#content_website');
var content_interaction = document.querySelectorAll('#content_interaction');

// function
  // all
btn_all.addEventListener('click', (e) => {
  content_app.forEach(item => {
    item.classList.remove('hide');
  });
  content_website.forEach(item => {
    item.classList.remove('hide');
  });
  content_interaction.forEach(item => {
    item.classList.remove('hide');
  });
});

  // app
btn_app.addEventListener('click', (e) => {
  content_website.forEach(item => {
    item.classList.add('hide');
  });
  content_interaction.forEach(item => {
    item.classList.add('hide');
  });
  content_app.forEach(item => {
    item.classList.remove('hide');
  });
});

  // app
btn_website.addEventListener('click', (e) => {
  content_app.forEach(item => {
    item.classList.add('hide');
  });
  content_interaction.forEach(item => {
    item.classList.add('hide');
  });
  content_website.forEach(item => {
    item.classList.remove('hide');
  });
});

  // app
btn_interaction.addEventListener('click', (e) => {
  content_website.forEach(item => {
    item.classList.add('hide');
  });
  content_app.forEach(item => {
    item.classList.add('hide');
  });
  content_interaction.forEach(item => {
    item.classList.remove('hide');
  });
});