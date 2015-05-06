function TodoCtrl($scope){

	$scope.todoList =
	[
		{ text:'go', done:false },
		{ text:'go1', done:false }
	];

	$scope.addTask = function()
	{
		$scope.todoList.push({text:$scope.newTask, done:false});
		$scope.newTask= "";
	};
	
}