
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



// scroll

// const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
const anchors = document.querySelectorAll('a[href^="#"]'),
      animationTime = 300,
      framesCount = 20;

anchors.forEach((item) => {
  // console.log(item);
  item.addEventListener('click', (e) => {
    e.preventDefault();
    
    // var coordY2 = item.dataset.scroll;
    // var coordY = document.querySelector(item.dataset.scroll);
    var coordY = document.querySelector(item.getAttribute('href'));

    // console.log(coordY2);
    console.log(coordY);

  });
});

// console.log(anchors);


