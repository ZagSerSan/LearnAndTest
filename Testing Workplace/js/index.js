
/**html шаблон 
<li class="photo-item">
  <img class="photo-item__image" src="https://via.placeholder.com/600/92c952">
  <h3 class="photo-item__title">
    accusamus beatae ad facilis cum similique qui sunt
  </h3>
</li>
*/

// контейнер для вывода пользователей в html
const dataContainerHTML = document.querySelector('#data-container');

// функция создания элемента
function creatUserElement(userName) {
  const userElement = document.createElement('li');
  const userElementAnchor = document.createElement('a');
  userElementAnchor.href = '#';
  userElementAnchor.textContent = userName;

  userElement.append(userElementAnchor);
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
  const URL = 'https://jsonplaceholder.typicode.com/photos/1'


  Promise.all(arrayOfIds.map(item => fetch(`https://jsonplaceholder.typicode.com/users/${item}`)))
    .then(responses => {
      // обработка ошибки
      let isOk = responses.every(response => response.ok === true)
      if (!isOk) {
        throw new Error('Ошибка запроса!');
      }
      return Promise.all(responses.map(response => response.json()));
    }).then(users => users.forEach(userItem => {
      dataContainerHTML.append(creatUserElement(userItem.name));
    }))
    .catch(error => {
      console.error(error);
    })
    .finally( () => {
      toggleLoaderHTML()
    })
}

// getUsersByIds([5, 6, 2, 1])