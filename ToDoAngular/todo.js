function TodoCtrl($scope){

	$scope.todoList =
	[
	{ text:'go', done:false }

	];

	$scope.addTask = function()
	{
		$scope.todoList.push({text:$scope.newTask, done:false});
		$scope.newTask= "";
	};

	$scope.clearCompleted = function()
	{
		$scope.todoList = _.filter($scope.todoList, function(todo){
			return !todo.done;
		});
	};

	$scope.getAllTask = function()
	{
		return $scope.todoList.length;
	};
	
	
}