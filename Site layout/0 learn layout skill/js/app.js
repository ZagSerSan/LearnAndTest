
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
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    
    var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: coordY,
      behavior: "smooth"
    });
  
  });
});

// console.log(anchors);


