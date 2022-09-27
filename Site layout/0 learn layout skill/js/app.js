/*
var el = document.getElementById('link');
var elData = el.dataset.link;

el.onclick = function() {
  this.classList.toggle('active');
}

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
*/
$(function () {
  
let linkEl = $('#link');

$('[data-link]').on('click', function (even) {
  even.preventDefault();
  var $this = $(this);
  $this.toggleClass('active');
});



});
