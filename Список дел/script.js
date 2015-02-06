var tasks = [];

function vvod() {
	 if(event.keyCode==13){addClickHandler()};
}

function addClickHandler(argument) {
	var description = getDescription();
	tasks.push(description);
	displayTasks(tasks);
}

function getDescription() {
	var vvodDela = document.getElementById('task').value;
	vvodDela.onkeydown = function(event) { if(event.keyCode==13){addClickHandler()};
}
	//vvodDela.addEventListener("onkeydown",vvod);
	return vvodDela;
}

function getContainer() {
	return document.getElementById('list');
}


function clearClickHandler(argument) {	
	var container = getContainer();
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

function displayTasks(tasks) {  
	
	var taskDescription = tasks[tasks.length-1];

	var changeStatusAction = document.createElement('input');
	changeStatusAction.type = "checkbox";
	//changeStatusAction.onclick = changeStatus;
    changeStatusAction.addEventListener("click",changeStatus);

	var description = document.createElement('span');
	description.innerHTML = taskDescription;

	var deleteAction = document.createElement('input');
	deleteAction.type = "button";
	deleteAction.value = "x";
	//deleteAction.onclick = del;
	deleteAction.addEventListener("click",del);
	
	var task = document.createElement('p');	
	task.appendChild(changeStatusAction);
	task.appendChild(description);
	task.appendChild(deleteAction);
	
	var container = getContainer();
	container.appendChild(task);	
}