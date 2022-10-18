
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