
var log1 = document.getElementById('text1JS');
var log2 = document.getElementById('text2JS');

var getArea = (function () {
  var width = 3;
  var height = 5;
  var size = width * height;
  console.log(size);
  return size
}())


// log1.textContent = out1;
// log2.textContent = getArea(3,3,2)[1];


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