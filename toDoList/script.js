const ul = document.querySelector('ul');
const input = document.querySelector('input');
const addBtn = document.querySelector('.addTodo');
const clearBtn = document.querySelector('.clear');
const completeBtn = document.querySelector('.completed');
const pendingBtn = document.querySelector('.todo');
const showAllBtn = document.querySelector('.all');
// {
//     name:
//     id:
//     isDone:
// }
const data = [];
addBtn.addEventListener('click', () => {
    let ifExists = data.find(item => item.name.trim().toLowerCase() === input.value.trim().toLowerCase());
    if(input.value && ifExists === undefined){
        const newTask = {
            name: input.value,
            isDone: false,
            id: Math.floor(Math.random()*1000)
        }
        data.push(newTask)
        input.value = '';
        renderData(data)
    }
    console.log(ifExists)
})
const handleCheck = () => {
    //change li  style
    const li = event.target.parentElement;
    li.style.textDecoration = 'line-through'
    //data update

    data.forEach(el => {
        if(li.innerText === el.name){
            el.isDone = true;
        }
    })
}
completeBtn.addEventListener('click', () => {
    const completedData = data.filter(el => el.isDone === true)
    renderData(completedData)
})
pendingBtn.addEventListener('click', () => {
    const pendingData = data.filter(el => el.isDone === false);
    renderData(pendingData)
})
showAllBtn.addEventListener('click', () => {
    renderData(data)
})
const renderData = (array) => {
    ul.innerHTML = '';
    array.map(el => {
        const check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        check.addEventListener('change', handleCheck)
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.innerHTML = el.name;
        li.prepend(check);
        ul.appendChild(li);
    })
}
