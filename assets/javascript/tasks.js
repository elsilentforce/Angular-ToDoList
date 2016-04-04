var app = angular.module('task-directives',[]);

//Dorectiva para Panel de Tareas
app.directive('taskPanel', function(){
	return{
		restrict: 'E',
		templateUrl: 'assets/partials/task-panel.tpl.html',
		controller: function(){
			this.tab = 1;

			this.selectTab = function(setTab){
				this.tab = setTab;
			};

			this.isSelected = function(checkTab){
				return this.tab === checkTab;
			};
		},
		controllerAs: 'tab'
	};
});

//Directiva para lista de Tareas.
app.directive('taskList',function(){
	return{
		restrict: 'E',
		templateUrl: 'assets/partials/task-list.tpl.html',
	};
});

app.directive('taskFinished',function(){
	return{
		restrict: 'E',
		templateUrl: 'assets/partials/task-finished.tpl.html'
	}
});

app.directive('taskCreate',function(){
	return{
		restrict: 'E',
		templateUrl: 'assets/partials/task-create.tpl.html',
		controller: function(){
			this.task = {};

			this.addTask = function(){
				tasks.push(this.task);
				this.task = {};
			}
		},
		controllerAs: 'taskCtrl'
	};
});