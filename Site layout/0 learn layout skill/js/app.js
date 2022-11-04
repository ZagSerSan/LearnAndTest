
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

// const links = [].slice.call(document.querySelectorAll('a[href^="#"]')),
const links = document.querySelectorAll('a[href^="#"]'),
      animationTime = 300,
      framesCount = 20;

links.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(item);
    let coordY = item.getAttribute('href');
    console.log(coordY);

  });
});

// console.log(links);


