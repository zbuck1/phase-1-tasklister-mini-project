document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoForm = document.getElementById('create-task-form');
  todoForm.addEventListener('submit', handleSubmit);
  const taskList = document.getElementById('tasks');

  const tasks = [];

  function handleSubmit(event) {
    event.preventDefault();
    tasks.push(event.target.description.value);
    renderTaskList();
    event.target.reset();
  }

  function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach(renderTask);
  }

  function renderTask(taskDescription) {
    const task = document.createElement('li');
    task.textContent = taskDescription;
    taskList.append(task);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.addEventListener('click', () => {
      task.remove();
    });
    task.append(deleteButton);
  }
});
