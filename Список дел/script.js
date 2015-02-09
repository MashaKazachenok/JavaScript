var tasks = [];

function vvod() {
	if(event.keyCode == 13){
		addClickHandler();
		displayPodval();
		getActiveTaskCount();
		getCompletedTaskCount();
	};
}

function addClickHandler(argument) {
	var description = getDescription();
	tasks.push(description);
	displayTasks(tasks);
}

function getDescription() {
	return getInput().value;
}


function getInput() {
	return document.getElementById('task');
}

function getContainer() {
	return document.getElementById('list');
}


function clearClickHandler(argument) {	
	var container = getContainer();
	container.innerHTML = null;	
}

function showAll(event) {
	var container = getContainer();

	var tasks = container.children;

	for (var i = 0; i < tasks.length; i++) {
		var task = tasks[i];

		task.style.display = "";
	}			
}

function arrGetActive (event) {

	var container = getContainer();

	var tasks = container.children;
	var activeTasks = [];
	
	for (var i = 0; i < tasks.length; i++) {
		var task = tasks[i];
		var completed = task.children[0].checked;
		
		if (completed)
		{
			activeTasks.push(task);
		}
	}	

	return activeTasks;
}

function arrGetCompleted (event) {

	var container = getContainer();

	var tasks = container.children;
	var completedTasks = [];

	for (var i = 0; i < tasks.length; i++) {
		var task = tasks[i];
		var completed = task.children[0].checked;
		
		if (!completed)
		{
			completedTasks.push(task);
		}
	}	

	return completedTasks;
}

function showActive() {
	var activeTasks = arrGetActive();
	setDisplayForTasks(activeTasks, "none");

	var completedTasks = arrGetCompleted();
	setDisplayForTasks(completedTasks, "");
}

function setDisplayForTasks(tasks, display) {
	for (var i = 0; i < tasks.length; i++) {
		tasks[i].style.display = display;
	}
}

function showCompleted(event) {

	var container = getContainer();

	var tasks = container.children;

	for (var i = 0; i < tasks.length; i++) {
		var task = tasks[i];

		var completed = task.children[0].checked;

		if (!completed)
		{
			task.style.display = "none";
		} else {
			task.style.display = "";
		}
	}
}

function clearCompleted(event) {
	var container = getContainer();

	var tasks = container.children;	

	var removeTasks = [];

	// находим завершенные задачи 
	for (var i = 0; i < tasks.length; i++) {
		var task = tasks[i];

		var completed = task.children[0].checked;

		if (completed)
		{
			removeTasks.push(task);
		}
	}

	// удаляем завершенные задачи
	for (var i = 0; i < removeTasks.length; i++) {
		container.removeChild(removeTasks[i])
	};

	displayPodval();
}


function del(event) {
	var task = event.target.parentNode;
	var container = task.parentNode;
	container.removeChild(task);

	displayPodval();
}

function changeStatus(event) {
	var task = event.target.parentNode;
	var desription = task.children[1];
	
	var status = event.target;
	
	// TODO: don't change style attributes, use css classes
	if(status.checked) {
		desription.style.color = "grey";	
		desription.style.textDecoration = 'line-through';	
	} else {
		desription.style.color = "black";
		desription.style.textDecoration = '';			
	}
	
	getActiveTaskCount();
	getCompletedTaskCount();
}

function displayTasks(tasks) {  
	
	var taskDescription = tasks[tasks.length-1];

	var changeStatusAction = document.createElement('input');
	changeStatusAction.type = "checkbox";
	//changeStatusAction.onclick = changeStatus;
	changeStatusAction.addEventListener("click", changeStatus);

	var description = document.createElement('span');
	description.innerHTML = taskDescription;

	var deleteAction = document.createElement('input');
	deleteAction.type = "button";
	deleteAction.value = "x";
	//delete
	//deleteAction.onclick = del;
	deleteAction.addEventListener("click", del);
	
	var task = document.createElement('p');	
	task.appendChild(changeStatusAction);
	task.appendChild(description);
	task.appendChild(deleteAction);
	

	var container = getContainer();
	container.appendChild(task);
	//container.appendChild(finStroka);

}

function  getActiveTaskCount() {
	var container = getContainer();

	var tasks = container.children;	

	var activeTasks = [];

	// находим завершенные задачи 
	for (var i = 0; i < tasks.length; i++) {
		var task = tasks[i];
		var completed = task.children[0].checked;
		
		if (!completed)
		{
			activeTasks.push(task);
		}		
	}

	document.getElementById('count').innerHTML = activeTasks.length;
}

function  getCompletedTaskCount() {
	//console.log('getActiveTaskCount');

	var container = getContainer();

	var tasks = container.children;	

	var completedTasks = [];

	// находим завершенные задачи 
	for (var i = 0; i < tasks.length; i++) {
		var task = tasks[i];
		var completed = task.children[0].checked;
		
		if (completed)
		{
			completedTasks.push(task);
		}		
	}

	var description = document.getElementById('clearCompleted').attributes['data-description'].value;

	document.getElementById('clearCompleted').value = description + completedTasks.length;
}

function displayPodval () {
	var container = getContainer();

	var tasks = container.children;

	var display = (tasks.length > 0) ? '' : 'none';

	document.getElementById('podval').style.display = display;
}

window.onload = function(){
	getInput().addEventListener("keydown", vvod);	

	document.getElementById('clearCompleted').addEventListener('click', clearCompleted);
	document.getElementById('showCompleted').addEventListener('click', showCompleted);
	document.getElementById('showActive').addEventListener('click', showActive);
	document.getElementById('showAll').addEventListener('click', showAll);
	getCompletedTaskCount();
	getActiveTaskCount();
	displayPodval();
}