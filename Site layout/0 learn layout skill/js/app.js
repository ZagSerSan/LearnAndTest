
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

