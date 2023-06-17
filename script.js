function createDeleteIcon() {
    var deleteIcon = document.createElement('span');
    deleteIcon.classList.add('delete-icon');
    deleteIcon.innerHTML = '&#x2716;'; // Ícone de "X"
  
    return deleteIcon;
  }
  
  function addTask(time) {
    var taskInput;
    if (time === 'day') {
      taskInput = document.getElementById('day-task-input');
    } else if (time === 'night') {
      taskInput = document.getElementById('night-task-input');
    }
  
    var taskList = taskInput.parentNode.previousElementSibling;
    var taskText = taskInput.value;
  
    if (taskText.trim() !== '') {
      var newTask = document.createElement('li');
      newTask.textContent = taskText;
  
      var deleteIcon = createDeleteIcon(); // Cria o ícone de exclusão
      deleteIcon.addEventListener('click', function(event) {
        removeTask(event); // Chama a função removeTask ao clicar no ícone de exclusão
      });
  
      newTask.appendChild(deleteIcon); // Adiciona o ícone de exclusão à tarefa
      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }
  
  function removeTask(event) {
    if (event.target.tagName === 'SPAN') {
      var task = event.target.parentNode;
      task.parentNode.removeChild(task);
    }
  }
  
  var dayTaskList = document.getElementById('day-task-list');
  var nightTaskList = document.getElementById('night-task-list');
  
  dayTaskList.addEventListener('click', removeTask);
  nightTaskList.addEventListener('click', removeTask);

  function changeProfileImage(event) {
    var input = event.target;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        var profileImg = document.getElementById('profile-img');
        profileImg.src = e.target.result;
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  