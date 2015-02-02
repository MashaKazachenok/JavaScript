var tasks = [];

// получаем описание дела
function getDescription () {
	return document.getElementById('task').value;
}

function addClickHandler (argument) {
	var description = getDescription();
	tasks.push(description);
}

function clearClickHandler (argument) {	
	var container = document.getElementById('list');
	container.innerHTML = null;	
}

function displayClickHandler (argument) {
	displayTasks(tasks);
}

function displayTasks (tasks) {
	
	
	for( i=0; i< tasks.length; i++) 
	{
		 // создаем пустой параграф
		var taskNode = document.createElement('p');
		// добавим описание дела в парграф
		taskNode.innerText = tasks[i];
		// получаем контейнер списка дел
		var container = document.getElementById('list');
		// вставить параграф с описанием дела в контейнет списка дел
		container.appendChild(taskNode);
	}
}