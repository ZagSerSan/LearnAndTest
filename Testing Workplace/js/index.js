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

/** 
// функция getUsersByIds
function getUsersByIds(arrayForIndexes, arrayOfUsers) {
  let newArray = [];
  for (let i = 0; i < arrayForIndexes.length; i++) {
    newArray.push(arrayOfUsers.find(item => {
      return item.id === arrayForIndexes[i];
    }))
  }

  newArray.forEach(userItem => {
    dataContainerHTML.append(creatUserElement(userItem.name));
  });
}
*/

function getUsersByIds(linksArray) {
  let newArray = [];
  for (item of linksArray) {
    newArray.push(fetch(`https://jsonplaceholder.typicode.com/users/${item}`))
  }
  return newArray
}

Promise.all(getUsersByIds([5, 6, 2, 1]))
  .then(responses => {
    const results = responses.map(response => response.json());
    return Promise.all(results);
  })
  .then(results => {
    results.forEach(userObj => {
      dataContainerHTML.append(creatUserElement(userObj.name));
    })
  })

/** 
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then( response => {
    if (!response.ok) {
      throw new Error('Ошибка запроса!');
    }
    return response.json()
  }).then(array => {

    // console.log(array);
    //todo
    // getUsersByIds([5, 6, 2, 1], array)
    dataContainerHTML.append(creatUserElement(array.name));

  })
  */

  .catch(error => {
    console.error(error);
  })
  .finally( () => {
    toggleLoaderHTML()
  })

