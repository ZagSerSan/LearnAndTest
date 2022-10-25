

/*
*/



/*
var getRooms = function (rooms,booked) {
  return rooms - booked
};

var getArea = (width,height,depth) => {
  var area=width*height;
  var volume=width*height*depth;
  var sizes = [area,volume];
  return sizes
};

var consol = p => console.log(p)
consol('some text and some text');

console.log(getArea(2,3,5)[1]);
console.log(getRooms(40,25));
*/


/*
var log1 = document.getElementById('text1JS');
var log2 = document.getElementById('text2JS');

var hotel = {
  name: 'Tula',
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: ['twin', 'double', 'suite'],
  
  checkFreerooms: function () {
    return this.rooms - this.booked;
  }
};
log1.textContent = 'Hotel name: '+ hotel.name;
log2.textContent = 'Free rooms: '+hotel.checkFreerooms();
*/

/* КНОПКИ ССЫЛКИ (data-*)
var el = document.getElementById('link');
var elData = el.dataset.link;
el.forEach((this).onclick = function() {
  this.classList.add('active');
})
*/


/*function activeLink(linkSelector) {
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

}*/

/*
function activeLink(linkSelector,classActive) {
  const links = document.querySelectorAll(linkSelector);
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      links.forEach(item => {
        item.classList.remove(classActive);
      });
      link.classList.add(classActive);
    });
  });
}
*/

function activeLink (linkSelector, classActive) {
  const links = document.querySelectorAll(linkSelector);
  links.forEach(linksElement1 => {
    linksElement1.addEventListener('click', (e) =>{
      e.preventDefault();
      links.forEach(linksElement2 => {
        linksElement2.classList.remove('active');
      });
      linksElement1.classList.add('active')
    });
  });
}

activeLink('#link','active');

/*
$(function () {
let linkEl = $('#link');
let linkEl = $('[data-link]');
linkEl.on('click', function (even) {
  even.preventDefault();
  var $this = $(this);
  $this.toggleClass('active');
});
});
*/