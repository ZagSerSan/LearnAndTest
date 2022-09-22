
var linkEl = document.getElementById('link');
var p = document.getElementById('p');
var p2 = document.getElementById('p2');

linkEl.addEventListener('click', function () {
   p.classList.toggle('active');
   p2.classList.toggle('active');
 });