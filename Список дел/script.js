function addTask (argument) {
	// получаем описание дела
	var task = document.getElementById('task').value;
	// создаем пустой параграф
	var taskNode = document.createElement('p');
	// добавим описание дела в парграф
	taskNode.innerText = task;
	// получаем контейнер списка дел
	var container = document.getElementById('list');
	// вставить параграф с описанием дела в контейнет списка дел
	container.appendChild(taskNode);
}