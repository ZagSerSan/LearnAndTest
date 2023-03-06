//TODO ========= 1й Модуль ==============

// 1. Способ через innerHTML
const codeHTML = 
`<form class="create-user-form">
<label>
    Имя
    <input type="text" name="userName" placeholder="Введите ваше имя">
</label>
<label>
    Пароль
    <input type="password" name="password" placeholder="Придумайте Пароль">
</label>
<button type="submit">
    Подтвердить
</button>
</form>`

const body = document.querySelector('body');
body.innerHTML = codeHTML;


/*
// 1. Способ через document.createElement()
// created form
const form = document.createElement('form');
form.className = 'create-user-form';

// labels: name, password
const labelName = document.createElement('label');
labelName.textContent = 'Имя';
labelName.style.marginLeft = '10px'

const labelPassword = document.createElement('label');
labelPassword.textContent = 'Пароль';
labelPassword.style.marginLeft = '10px'

// input for name and password
const inputName = document.createElement('input');
inputName.type = 'text';
inputName.name = 'userName';
inputName.placeholder = 'Введите ваше имя';
inputName.style.marginLeft = '4px'

const inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.name = 'password';
inputPassword.placeholder = 'Придумайте Пароль';
inputPassword.style.marginLeft = '4px'

// button
const button = document.createElement('button');
button.type = "submit";
button.textContent = 'Подтвердить';
button.style.marginLeft = '10px'

const body = document.querySelector('body');

// past code
labelName.append(inputName)
labelPassword.append(inputPassword)
form.prepend(labelName, labelPassword, button)
body.prepend(form);
*/



