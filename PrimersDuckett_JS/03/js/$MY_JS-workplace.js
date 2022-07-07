function getArea(width, heigth) {
   return width * heigth;
 }
 
 var msg = getArea(10, 15);
 
 var el = document.getElementById('message');
 el.textContent = msg;