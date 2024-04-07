const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const taskContainer = document.querySelector('.field__tasks');

/* let Data = JSON.parse(localStorage.getItem('data')) || []; */

let Data = localStorage.getItem(JSON.stringify('data')) || [];

btn.addEventListener('click', function(){
    const val = input.value;

    if(val){
        Data.push({
            name: val,
            isChecked: false
        })
    }

    input.value = '';
    fillHTML(Data);
    setLS();
})


const setLS = () => {
    localStorage.setItem('data', JSON.stringify(Data));
}


const fillHTML = (Data) => {
    Data.forEach((elem, index) => {
        taskContainer.innerHTML += createTemplates(elem, index);
    });
}

const createTemplates = (elem, index) => {
    return `
        
    `
}



/* active placeholder */

const fakePLaceholder = input.closest('.fake__placeholder');

input.addEventListener('focus', function(){
    input.nextElementSibling.classList.add('active');
})

input.addEventListener('blur', function(){
    if(input.value.length > 0){
        input.nextElementSibling.classList.add('active');
    }
    
    input.nextElementSibling.classList.remove('active');
    
})


/*     const formInput = document.querySelectorAll('.form__input');

    formInput.forEach(item => {

        const parent = item.closest('.form__item');
        const placeholder = parent.querySelector('.fake__placeholder');
        

        item.addEventListener('focus', function(){
            placeholder.classList.add('active');
        });

        item.addEventListener('blur', function(){
            if(item.value.length > 0){
                placeholder.classList.add('active');
            }else{
                placeholder.classList.remove('active');
            }
        })

    }); */