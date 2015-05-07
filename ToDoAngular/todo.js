 var example = angular.module("example", ["ngStorage"]);
            example.controller("ExampleController", function($scope, $localStorage) {
 

	$scope.todoList =   
	[
	{ text:$localStorage.text, done:$localStorage.done }

	];

	$scope.addTask = function()
	{
		$scope.todoList.push({text:$scope.newTask, done:false});
		
	    $localStorage.text = $scope.newTask;
	    $localStorage.done =  false;

	    $scope.newTask= "";
	};
	

	$scope.clearCompleted = function()
	{
		$scope.todoList = _.filter($scope.todoList, function(todo){
			return !todo.done;
		});
	};

	$scope.getActive = function(){
		
		
	};

	$scope.getCompleted = function()
	{
		
		
	};

	$scope.getAllTask = function()
	{
		return $scope.todoList.length;
	};
	
	
});