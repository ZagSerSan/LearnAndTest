
// массив задач
const tasks = [
  {
      id: '1138465078061',
      completed: false,
      text: 'Посмотреть новый урок по JavaScript',
  },
  {
      id: '1138465078062',
      completed: false,
      text: 'Выполнить тест после урока',
  },
  {
      id: '1138465078063',
      completed: false,
      text: 'Выполнить ДЗ после урока',
  },
];
// получение блока для добавления задач
const tasksList = document.querySelector('.tasks-list');
// функция для добавления задач из массива
function createElementByArray(array) {
  array.forEach((item)=> {
     let taskItem = document.createElement('div');
     taskItem.className = 'task-item';
     taskItem.dataset.taskId = `${item.id}`;
     taskItem.innerHTML =
     `<div class="task-item__main-container">
     <div class="task-item__main-content">
         <form class="checkbox-form">
             <input class="checkbox-form__checkbox" type="checkbox" id="task-${item.id}">
             <label for="task-${item.id}"></label>
         </form>
         <span class="task-item__text">
             ${item.text}
         </span>
     </div>
     <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${item.id}">
         Удалить
     </button>
     </div>`
     tasksList.append(taskItem);
  });
  // return console.log('Элементы были добавлены из массива.');
}
createElementByArray(tasks);

// обработка формы
const form = document.querySelector('.create-task-block');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // получение формы и инпута
  const {target} = event;
  const {taskName} = target;
  
  // шаблон новой задачи для массива
  let newTask = {
    id: `113846507806${tasks.length+1}`,
    completed: false,
    text: `${taskName.value}`,
  }
  // проверка, существует ли такая задача в массиве
  const itContain = tasks.some(item => {
    // поиск и сравнение ведённого задания в массиве задач
    return item.text === taskName.value;
  })
  // функция добавления элемента на страницу
  function addTaskToHtml() {
    tasks.push(newTask);
    // создание и добавление элемента на страницу
    let taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = `${newTask.id}`;
    taskItem.innerHTML =
    `<div class="task-item__main-container">
    <div class="task-item__main-content">
        <form class="checkbox-form">
            <input class="checkbox-form__checkbox" type="checkbox" id="task-${newTask.id}">
            <label for="task-${newTask.id}"></label>
        </form>
        <span class="task-item__text">
            ${newTask.text}
        </span>
    </div>
    <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${newTask.id}">
        Удалить
    </button>
    </div>`
  
    tasksList.append(taskItem);
    console.log(tasks);
    return tasks
  }
  // создание и получение блока ошибки
  const errorBlock = document.createElement('span')
    errorBlock.className = 'error-message-block'
    errorBlock.textContent = 'Задача с таким названием уже существует.'
  let isError = target.querySelector('.error-message-block');
  
  // функция проверяющая валидпацию значение инпута
  const checkInputValueOnValid = (inputValue) => {
    // if (inputValue === '' || itContain) {
    if (inputValue === '') {
      return {bollean: false, type: 'empty'}
    } else if (itContain) {
      return {bollean: false, type: 'isContain'}
    }
    return {bollean: true}
  }
  //перемення, означающая валидпацию значение инпута
  const isValid = checkInputValueOnValid(taskName.value);

  // если значени инпута валидно
  if (isValid.bollean) {
    // если блок ошибки есть, то удалить его и добавить задачу, в прот случае просто добавить задачу
    isError ? (isError.remove(), addTaskToHtml()) : addTaskToHtml();
  } else {
    // если блок ошибки есть, то не добавлять снова, в прот случае добавить
    if(!isError) {target.append(errorBlock);}
    if (isValid.type === 'empty') {
      // если блок ошибки уже есть, то изменить текст сообщения ему, если нету, то создаваемому блоку ошибки
      isError ? isError.textContent = 'Название задачи не должно быть пустым.' : errorBlock.textContent = 'Название задачи не должно быть пустым.'
    } else if (isValid.type === 'isContain') {
      // если блок ошибки уже есть, то изменить текст сообщения ему, если нету, то создаваемому блоку ошибки
      isError ? isError.textContent = 'Задача с таким названием уже существует.' : errorBlock.textContent = 'Задача с таким названием уже существует.'
    }
  }
});

// удаление задачи
// создание модального окна
const modalForDeleteTask = document.createElement('div');
modalForDeleteTask.className = 'modal-overlay modal-overlay_hidden'
modalForDeleteTask.innerHTML =
`<div class="delete-modal">
    <h3 class="delete-modal__question">
        Вы действительно хотите удалить эту задачу?
    </h3>
    <div class="delete-modal__buttons">
        <button class="delete-modal__button delete-modal__cancel-button">
            Отмена
        </button>
        <button class="delete-modal__button delete-modal__confirm-button">
            Удалить
        </button>
    </div>
</div>
</div>`;

// получения блока родителя всех кнопок
tasksList.addEventListener('click', (event) => {
  event.stopPropagation()
  
  const {target} = event;
  const dataId = target.dataset.deleteTaskId;
  const elementToDelete = document.querySelector(`[data-task-id='${dataId}']`);
  const button = event.target.closest("button");
  
  if (button) {
    document.querySelector('body').append(modalForDeleteTask);
    modalForDeleteTask.classList.remove('modal-overlay_hidden')
  }

  // todo
  const modalOnHtml = document.querySelector('.modal-overlay');
  const modalbuttons = modalOnHtml.querySelectorAll("button");

  console.log(modalbuttons);

  modalbuttons.forEach(button => {
    button.addEventListener('click', (event) => {
      // несколько раз удаляет из массива -> потому что удаляет для каждой кнопки, две кнопки = два удаления, два раза срабатывает функция удаления из массива
      
      if (event.target.className.includes('delete-modal__confirm-button')) {
        // поиск и удаление из массива
        const index = tasks.findIndex( item => {
          console.log(item.id);
          return item.id === dataId
        });
        elementToDelete.remove();
        tasks.splice(index, 1)
        modalOnHtml.classList.add('modal-overlay_hidden');
  
        console.log(tasks);
      } else {
        modalOnHtml.classList.add('modal-overlay_hidden');
      }
    })
    
  })

  
});




