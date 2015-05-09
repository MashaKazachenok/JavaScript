 var example = angular.module("example", ["ngStorage"]);
 example.controller("ExampleController", function($scope, $localStorage) {


 	if (!$localStorage.list){
 		$scope.todoList=[]
 	} else {
 		$scope.todoList =  JSON.parse($localStorage.list)
 	};

 	$scope.addTask = function()
 	{
 		if(!$scope.newTask)return;
 		$scope.todoList.push({text:$scope.newTask, done:false});
 		$localStorage.list = JSON.stringify($scope.todoList);
 		$scope.newTask= "";
 	};

 	$scope.clearCompleted = function()
 	{
 		$scope.todoList = _.filter($scope.todoList, function(todo){
 			return !todo.done;
 		});
 		$localStorage.list = JSON.stringify($scope.todoList);
 	};

 	$scope.changeCheckbox = function()
 	{
 		$localStorage.list = JSON.stringify($scope.todoList);
 	};
 });