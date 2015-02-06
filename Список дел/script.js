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
	var Ev = event.target.nodeName;
	var Parent = event.target.parentNode;
	var ParentParent = Parent.parentNode;
	ParentParent.removeChild(event.target.parentNode);
}

function shrift() {
	var a = document.getElementById("text");
	var Fl = document.getElementById("flag");
	if(Fl.checked) {
	a.style.color = "grey";	
	a.style.textDecoration= 'line-through';	
	} else {
	a.style.color = "black";
	a.style.textDecoration= '';			
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