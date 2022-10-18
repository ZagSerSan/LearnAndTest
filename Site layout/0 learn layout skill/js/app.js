
var text1 = document.getElementById('text1JS');
var text2 = document.getElementById('text2JS');
var width1 = 3;
var height1 = 5;
var wallH = 10;
var wallW = 10;

function getArea(parametr1,parametr2) {
  return parametr1 * parametr2
}
text1.textContent = getArea(width1,height1);
text2.textContent = getArea(wallH,wallW);


/* КНОПКИ ССЫЛКИ (data-*)
var el = document.getElementById('link');
var elData = el.dataset.link;
el.forEach((this).onclick = function() {
  this.classList.add('active');
})
/*

/*
var linkSelector = document.getElementById('link');
function activeLink(linkSelector) {
  const links = document.querySelectorAll(linkSelector);
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      links.forEach((item) => {
        item.classlist.remove(linkSelector);
      });
      link.classlist.add(linkSelector);
    });
  });
}
activeLink(linkSelector);

/*
$(function () {
// let linkEl = $('#link');
let linkEl = $('[data-link]');
linkEl.on('click', function (even) {
  even.preventDefault();
  var $this = $(this);
  $this.toggleClass('active');
});
});
*/