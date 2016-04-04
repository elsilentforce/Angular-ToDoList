var app = angular.module('toDoList',['task-directives']);

app.controller("TaskController",function(){
	this.tasks = tasks;
});

var tasks = [
	{
		name: "Ordenar",
		description: "Limpiar pieza y baño",
		done: false
	},
	{
		name: "Realizar compras",
		description: "Comprar frutas y verduras para el almuerzo.",
		done: false
	}
	
]