import './index.css';

// localStorage.setItem('isNotFirstVisit', 'true')
const cookieButton = document.querySelector('.cookie-consent__button');
const cookieConsent = document.querySelector('.cookie-consent');

if (localStorage.getItem('isNotFirstVisit')) {
   cookieConsent.style.display = 'none';
}

cookieButton.addEventListener('click', (event) => {
   event.preventDefault();

   cookieConsent.style.display = 'none';
   localStorage.setItem('isNotFirstVisit', 'true')
});
