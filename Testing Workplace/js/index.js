
const dataContainerHTML = document.querySelector('#data-container');

function creatUserElement(userName) {
  const userElement = document.createElement('li');
  const userElementAnchor = document.createElement('a');
  userElementAnchor.href = '#';
  userElementAnchor.textContent = userName;

  userElement.append(userElementAnchor);
  return userElement
}

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

fetch('https://jsonplaceholder.typicode.com/users')
  .then( response => {
    if (!response.ok) {
      throw new Error('Ошибка запроса!');
    }
    return response.json()
  }).then(array => {
    array.forEach(userItem => {
      dataContainerHTML.append(creatUserElement(userItem.name));
    });
  })
  .catch(error => {
    console.error(error);
  })
  .finally( () => {
    toggleLoaderHTML()
  })





