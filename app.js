const inputTask = document.querySelector('.input-task');
const addBtn = document.querySelector('.add-task');
const taskContainer = document.querySelector('.task-container');

addBtn.addEventListener('click', function() {
    const task = document.createElement('div');
    task.classList.add('task');

    const li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.append(li);

    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add('check-btn');
    task.append(checkBtn);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.classList.add('delete-btn');
    task.append( deleteBtn);

    if (inputTask.value === '') {
        alert('Field cannot be empty!');
    } else {
        taskContainer.append(task);
    }

    inputTask.value = '';

    checkBtn.addEventListener('click', function () {
        
    })

    deleteBtn.addEventListener('click', function () {
        
    })
})