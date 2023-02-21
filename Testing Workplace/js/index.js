//TODO ========= 1й Модуль ==============

console.log('----------------- Задание #1 -------------------')

const users = [
	{
    username: 'David',
    status: 'online',
    lastActivity: 10
	},
	{
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
	},
	{
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  },
  // {
  //   username: 'Serhii',
  //   status: 'online',
  //   lastActivity: 134
  // },
  // {
  //   username: 'Ivan',
  //   status: 'offline',
  //   lastActivity: 64
  // }
];
// console log with for...of
// let i = 0;
// for (item of users) {
//   console.log(`users${i}`, users[i]);
//   i++;
// }

let onlineUsers = users.filter(item => {
  return item.status === 'online'
});
// console.log('onlineUsers', onlineUsers);

let usersOnlineNames = [];
for (obj of onlineUsers) {
  usersOnlineNames.push(obj.username);
}
usersOnlineNames = usersOnlineNames.join(', ');
// console.log('usersOnlineNames:', usersOnlineNames);

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)


