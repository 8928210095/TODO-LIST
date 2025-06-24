function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">X</button>
  `;
  
  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}

function toggleComplete(span) {
  const li = span.parentElement;
  li.classList.toggle('completed');
}
