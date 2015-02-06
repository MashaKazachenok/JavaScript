var tasks = [];

function getDescription () {
	return document.getElementById('task').value;
}

function addClickHandler (argument) {
	var description = getDescription();
	tasks.push(description);
	displayTasks(tasks);
}

function clearClickHandler (argument) {	
	var container = document.getElementById('list');
	container.innerHTML = null;	
}

function del(event) {
	var task = event.target.parentNode;
	var container = task.parentNode;
	container.removeChild(task);
}

function changeStatus(event) {
	var task = event.target.parentNode;
	var desription = task.children[1];
	
	var status = event.target;
	
	// TODO: don't change style attributes, use css classes
	if(status.checked) {
		desription.style.color = "grey";	
		desription.style.textDecoration= 'line-through';	
	} else {
		desription.style.color = "black";
		desription.style.textDecoration= '';			
	}
	
}

function displayTasks (tasks) {  
	
	var taskDescription = tasks[tasks.length-1];

	var container = document.getElementById('list');

	var changeStatusAction = document.createElement('input');
	changeStatusAction.type = "checkbox";
	changeStatusAction.onclick=changeStatus;

	var description = document.createElement('span');
	description.innerHTML = taskDescription;

	var deleteAction = document.createElement('input');
	deleteAction.type = "button";
	deleteAction.value = "x";
	deleteAction.onclick=del;
	
	var task = document.createElement('p');	
	task.appendChild(changeStatusAction);
	task.appendChild(description);
	task.appendChild(deleteAction);
	
	container.appendChild(task);	
}