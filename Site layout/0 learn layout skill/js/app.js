/*
var el = document.getElementById('link');
var elData = el.dataset.link;

el.onclick = function() {
  this.classList.toggle('active');
}
console.log(elData);*/
let linkEl = $('#link');

$('[data-link]').on('click', function (even) {
  even.preventDefault();
  var $this = $(this);
  $this.toggleClass('active');
});
