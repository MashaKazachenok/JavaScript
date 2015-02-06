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
		 
	var container = document.getElementById('list');
	var taskNode = document.createElement('p');
	taskNode.id = "text";
	var container = document.getElementById('list');
	var Del = '<input type="button" value="x" onclick="del(event)">';
	taskNode.innerHTML = '<input type="checkbox" id="flag" onclick="shrift()">' + tasks[tasks.length-1] +"    " + Del;
	container.appendChild(taskNode);
	    
}