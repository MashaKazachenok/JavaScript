var tasks = [];

// получаем описание дела
function getDescription () {
	return document.getElementById('task').value;
}

function addTask () {
	
	// создаем пустой параграф
	var taskNode = document.createElement('p');
	// добавим описание дела в парграф
	taskNode.innerText = getDescription();
	// получаем контейнер списка дел
	var container = document.getElementById('list');
	// вставить параграф с описанием дела в контейнет списка дел
	container.appendChild(taskNode);
}