const inputTask = document.querySelector('.input-task');
const addBtn = document.querySelector('.add-task');
const taskContainer = document.querySelector('.task-container');

addBtn.addEventListener('click', function() {
    const task = document.createElement('div');
    task.classList.add('task');

    const li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.append(li);

    if (inputTask.value === '') {
        alert('Field cannot be empty!');
    } else {
        taskContainer.append(task);
    }

    inputTask.value = '';
})