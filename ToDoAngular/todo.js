 var example = angular.module("example", ["ngStorage"]);
 example.controller("ExampleController", function($scope, $localStorage) {


	//$scope.todoList = $localStorage.todoList; 
 	$scope.todoList = JSON.parce(window.localStorage.get("todoList"));
 	

 	$scope.addTask = function()
 	{
 		$scope.todoList.push({text:$scope.newTask, done:false});


 		var todoList = {
 			text: $scope.newTask,
 			done: false
 		}

 		//$localStorage.todoList = todoList;
 		window.localStorage.set("todoList", JSON.stringify(todoList));
 		$scope.newTask= "";
 	};

 	$scope.changeCheckbox = function(){  
 		
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