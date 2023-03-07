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
// получение блока задач
const tasksList = document.querySelector('.tasks-list');
// создание шаблона айтема
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
     <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
         Удалить
     </button>
     </div>`
     tasksList.append(taskItem);
  });
  return console.log('Элементы были добавлены из массива.');
}
createElementByArray(tasks);

// обработка формы
const form = document.querySelector('.create-task-block');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // получение формы и инпута
  const {target} = event;
  let {taskName} = target;
  
  // массив задач += новая задача
  let newTask = {
    id: `113846507806${tasks.length+1}`,
    completed: false,
    text: `${taskName.value}`,
  }
  tasks.push(newTask);
  console.log(tasks);

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
  <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
      Удалить
  </button>
  </div>`
  tasksList.append(taskItem);
});
