var var1 = document.getElementById('a_data');
var var2 = var1.getAttribute('data-link');

var1.onclick = function (even) {
   even.preventDefault();

   var1.classList.toggle('active')
   console.log('class toggled');
}


