var tasks = [];

function vvod() {
	if(event.keyCode == 13){
		addClickHandler()
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
	var lastRow = event.target.parentNode;
	var task = lastRow.parentNode;
	var desription = task.children[0];
	var status = event.target;
	var status = desription.children[0];
	if(status.checked) {
		desription.style.display  = "";	
		
	} else {
		desription.style.display  = "";			
	}
}

function showActive(event) {
	var lastRow = event.target.parentNode;
	var task = lastRow.parentNode;
	var desription = task.children[0];
	var status = desription.children[0];
	if(status.checked) {
		desription.style.display = "none";	
		
	} else {
		desription.style.display  = "";			
	}
}

function showCompleted(event) {
	var lastRow = event.target.parentNode;
	var task = lastRow.parentNode;
	var desription = task.children[0];
	var status = desription.children[0];
	if(status.checked) {
		desription.style.display  = "";	
		
	} else {
		desription.style.display  = "none";			
	}
}

function clearCompleted(event) {
	var lastRow = event.target.parentNode;
	var task = lastRow.parentNode;
	var desription = task.children[0];
	var status = desription.children[0];
	if(status.checked) {
		desription.innerHTML = "";				
	}
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
		desription.style.textDecoration = 'line-through';	
	} else {
		desription.style.color = "black";
		desription.style.textDecoration = '';			
	}
	
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
	//deleteAction.onclick = del;
	deleteAction.addEventListener("click", del);
	
	var task = document.createElement('p');	
	task.appendChild(changeStatusAction);
	task.appendChild(description);
	task.appendChild(deleteAction);
	
	var kol = document.createElement('span');
	kol.innerHTML = "item left";

	var all = document.createElement('input');
 	all.type = "button";
 	all.value = "All"; 
 	all.addEventListener("click", showAll);

	var active = document.createElement('input');
 	active.type = "button";
 	active.value = "Active";
 	active.addEventListener("click", showActive);

 	var completed = document.createElement('input');
 	completed.type = "button";
 	completed.value = "Completed"; 
 	completed.addEventListener("click", showCompleted);

 	var clear = document.createElement('input');
 	clear.type = "button";
 	clear.value = "Clear completed";
 	clear.addEventListener("click", clearCompleted);

	var finStroka = document.createElement('p');	
	finStroka.appendChild(kol);
	finStroka.appendChild(all);
	finStroka.appendChild(active);
	finStroka.appendChild(completed);
	finStroka.appendChild(clear);

	var container = getContainer();
	container.appendChild(task);
	container.appendChild(finStroka);	
}

window.onload = function(){
	getInput().addEventListener("keydown", vvod);	
}