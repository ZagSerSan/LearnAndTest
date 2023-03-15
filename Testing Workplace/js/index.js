
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodosByIds = async (ids) => {
  try {
    console.log('Загрузка...');
    const requests = await ids.map(id => fetch(`${TODOS_URL}/${id}`));
    const responses = await Promise.all(requests)
    const dataResults = responses.map(data => data.json());
    const allTasks = await Promise.all(dataResults);
    console.log('Результат:');
    console.log('allTasks:', allTasks);
  } catch { error => console.log('error', error);
  } finally {
    console.log('finally');
  }
}
getTodosByIds([43, 21, 55, 100, 10]);
