const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');

//создания элемента задачи..
function createTask(title) {
  const task = document.createElement('div');
  task.className = 'task';

  const taskTitle = document.createElement('div');
  taskTitle.className = 'task__title';
  taskTitle.textContent = title;

  const removeBtn = document.createElement('a');
  removeBtn.href = '#';
  removeBtn.className = 'task__remove';
  removeBtn.innerHTML = '&times;';

  //обработка удаления
  removeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    task.remove();
  });

  task.appendChild(taskTitle);
  task.appendChild(removeBtn);
  return task;
}

//новые задачи
function addTask() {
  const title = taskInput.value.trim();
  if (title === '') return;

  const task = createTask(title);
  tasksList.appendChild(task);
  taskInput.value = '';
}

//«Добавить»
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  addTask();
});

//Enter
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTask();
  }
});

//Перестраховка, не уверен что нужно, но пусть будет
document.querySelectorAll('.task').forEach(task => {
  const removeBtn = task.querySelector('.task__remove');
  if (removeBtn && !removeBtn.listenerAdded) {
    removeBtn.addEventListener('click', (event) => {
      event.preventDefault();
      task.remove();
    });
    removeBtn.listenerAdded = true;
  }
});