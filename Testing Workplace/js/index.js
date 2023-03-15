
// контейнер для вывода пользователей в html
const dataContainerHTML = document.querySelector('#data-container');

// функция создания элемента
function creatUserElement(userPhotoObj) {
  // li
  const userElement = document.createElement('li');
  // img
  const userElement_image = document.createElement('img');
  userElement_image.className = 'photo-item__image';
  userElement_image.src = userPhotoObj.url;
  // h3
  const userElement_h3 = document.createElement('h3');
  userElement_h3.className = 'photo-item__title';
  userElement_h3.textContent = userPhotoObj.title;
  
  userElement.append(userElement_image);
  userElement.append(userElement_h3);
  return userElement
}

// переключался лоудера
function toggleLoaderHTML() {
  const loaderHTML = document.querySelector('#loader');
  let isHidden = loaderHTML.hasAttribute('hidden');

  if (isHidden) {
    loaderHTML.removeAttribute('hidden');
  } else {
    loaderHTML.setAttribute('hidden', '');
  }
}
toggleLoaderHTML()

//todo
function getFastestLoadedPhoto(ids) {
  const URL = ''

  Promise.race(ids.map(id => fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)))
    .then(response => {
      // обработка ошибки
      if (!response.ok) {
        throw new Error('Ошибка запроса!');
      }
      return response.json();
    })
    .then(userPhotoObj => {
      console.log('photo id:', userPhotoObj.id);
      dataContainerHTML.append(creatUserElement(userPhotoObj))
    })
    .catch(error => {
      console.error(error);
    })
    .finally( () => {
      toggleLoaderHTML()
    })
}

getFastestLoadedPhoto([60, 12, 55]);

