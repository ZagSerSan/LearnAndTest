
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
// const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albumsERROR';
const dataContainerHTML = document.querySelector('#data-container');

// функция создания html-элемента
function creatAlbumElement(albumName) {
  const albumElement = document.createElement('li');
  albumElement.textContent = albumName;
  return albumElement
}

async function renderAlbums() {
  try {
    console.log('Загрузка...');
    const respons = await fetch(ALBUMS_URL);
    if (!respons.ok) {
      throw new Error('Произошла ошибка в получении данных об альбомах...');
    }
    const albums = await respons.json()
    albums.forEach(album => {
      dataContainerHTML.append(creatAlbumElement(album.title));
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log('finally');
  }
}

renderAlbums()
