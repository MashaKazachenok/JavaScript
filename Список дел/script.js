function addTask (argument) {
	var task = document.getElementById('task').value;
	var container = document.getElementById('list');
	container.innerText = task;
}