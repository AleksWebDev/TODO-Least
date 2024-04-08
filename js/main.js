
const btn = document.querySelector('.form__btn');
const input = document.querySelector('.input');
const taskContainer = document.querySelector('.tasks__container');
const hints = document.querySelector('.hint');

let allData = JSON.parse(localStorage.getItem('task')) || [];



btn.addEventListener('click', function(){

    let val = input.value;

    if(!val){
        hints.innerHTML = 'Заполните пустое поле!!!'
        hints.classList.add('hint__err');
        return '';
    }

    allData.push({
        name: val,
        isCheked: false,
    })
    fillHTML();
    setLS();

    hints.innerHTML = 'Что делаем, сколько времени тратим, какой результат получим';
    hints.classList.remove('hint__err');
    input.value = '';
})

/* Rendering HTML templates in loading browser */
window.addEventListener('load', function(){
    fillHTML();
    complitedTasks();
})
const fillHTML = () => {
    taskContainer.innerHTML = '';

    allData.forEach((item, index) => {
        taskContainer.innerHTML += createTemplates(item, index);
    })
}

const createTemplates = (item, index) => {
    return `
    <div class="task" ${item.isCheked ? 'checked' : ''}>
        <div class="text">${item.name}</div>
        <div class="task__control">
            <input onclick="complitedTasks(${index})"  ${item.isCheked ? 'checked' : ''} type="checkbox" class="checkbox">
            <button onclick="deliteTask(${index})" class="delite__task">&#10060</button>
        </div>
    </div>
    `
}
/* ----- */


/* Function for adding items to localStorage */
const setLS = () => {
    localStorage.setItem('task', JSON.stringify(allData));
}

const complitedTasks = (idx) => {

    allData[idx].isCheked = !allData[idx].isCheked;
    let arrComplitedTask = [];
    let arrActiveTask = [];

    allData.forEach((item, index) => {
        if(item.isCheked){
            arrComplitedTask.push(item);
        }else{
            arrActiveTask.push(item);
        }
    })

    allData = [...arrActiveTask, ...arrComplitedTask];

    fillHTML();
    setLS();
}

/* Function delite task */
const deliteTask = (index) => {
    allData.splice(index, 1);
    setLS();
    fillHTML();
}

/* active placeholder */
const formTitle = document.querySelector('.form__title');
const hint = document.querySelector('.hint');

input.addEventListener('focus', function(){
        formTitle.classList.add('active');
})

input.addEventListener('blur', function(){
        if(input.value.length > 0){
            formTitle.classList.add('active');
        }

        formTitle.classList.remove('active');
})





