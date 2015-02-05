var tasks = [];

// получаем описание дела
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

function displayTasks (tasks) {  
		 
	var container = document.getElementById('list');
	var taskNode = document.createElement('p');
	var container = document.getElementById('list');
	var Del = '<input type="button" value="Del" onclick="del(event)">';
	taskNode.innerHTML = '<input type="checkbox" id="flag">' + tasks[tasks.length-1] +"  " + Del;
	container.appendChild(taskNode);
	    
}