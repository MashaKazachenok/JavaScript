 var example = angular.module("example", ["ngStorage"]);
 example.controller("ExampleController", function($scope, $localStorage) {

 	$scope.todoList =  
 	[
 	{  text:"goooo", done:true },
 	{  text:JSON.parse(localStorage.getItem("ngStorage-text")), done:$localStorage.done}
 	];

 	//$scope.todoList.text =  $localStorage.text;
 	//$scope.todoList.done = $localStorage.done;

 	$scope.addTask = function(){

 		$scope.todoList.push({text:$scope.newTask, done:false});

 		if($localStorage.text !=null){

 			$localStorage.text = $localStorage.text + JSON.stringify($scope.newTask);
 		} else {
 			$localStorage.text = JSON.stringify($scope.newTask);
 		}

 		if($localStorage.done!= null) {
 			$localStorage.done = $localStorage.done + JSON.stringify(false);
 		} else { 
 			$localStorage.done = false
 		}
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
 });