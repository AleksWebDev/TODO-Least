
const btn = document.querySelector('.form__btn');
const input = document.querySelector('.input');
const taskContainer = document.querySelector('.tasks__container');

let allData = JSON.parse(localStorage.getItem('task')) || [];

btn.addEventListener('click', function(){

    let val = input.value;

    if(!val){
        console.log('Writte down task')
        return '';
    }

    allData.push({
        name: val,
        isCheked: false,
    })

    fillHTML();
    setLS();

    input.value = '';
})

window.addEventListener('load', function(){
    fillHTML();
})

const fillHTML = () => {
    taskContainer.innerHTML = '';

    allData.forEach((item, index) => {
        taskContainer.innerHTML += createTemplates(item, index);
    })
}

const setLS = () => {
    localStorage.setItem('task', JSON.stringify(allData));
}

const createTemplates = (item, index) => {
    return `
    <div class="task">
        <div class="text">${item.name}</div>
        <div class="task__control">
            <input type="checkbox" class="checkbox">
            <button onclick="deliteTask(${index})" class="delite__task">&#10060</button>
        </div>
    </div>
    `
}

const deliteTask = (index) => {
    allData.splice(index, 1);
    setLS();
    fillHTML();
}























/* active placeholder */

/* const fakePLaceholder = input.closest('.fake__placeholder');

input.addEventListener('focus', function(){
    input.nextElementSibling.classList.add('active');
})

input.addEventListener('blur', function(){
    if(input.value.length > 0){
        input.nextElementSibling.classList.add('active');
    }
    
    input.nextElementSibling.classList.remove('active');
    
}) */

>>>>>>> html
