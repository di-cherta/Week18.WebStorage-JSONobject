const taskInput = document.getElementById('addtask');
const addTaskButton = document.getElementById('add');
const taskList = document.querySelector('.list');
const clearListButton = document.getElementById('clear');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    if (tasks.length === 0) {
        taskList.innerHTML = '<p class="notask">Нет задач</p>';
        clearListButton.disabled = true;
    } else {
        tasks.forEach((task) => {
        const taskItem = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskList.appendChild(taskItem);
        });
        clearListButton.disabled = false;
    }
}
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({text: taskText, completed: false });
        saveTasks();
        taskInput.value = '';
        renderTasks();
    }
});
clearListButton.addEventListener('click', () => {
    tasks = [];
    saveTasks();
    renderTasks();
});
renderTasks();