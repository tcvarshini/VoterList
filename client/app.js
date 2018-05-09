var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/home.html',
			controller:'voterController'
		})
		.when('/voter', {
			templateUrl:'templates/list.html',
			controller:'voterController'
		})
    .when('/voter/update', {
			templateUrl:'templates/update.html',
			controller:'voterController'
		})
    .when('/voter/delete', {
			templateUrl:'templates/delete.html',
			controller:'voterController'
		})
		.when('/voter/create', {
			templateUrl:'templates/add.html',
			controller:'voterController'
		})
		.when('/voter/:id/update', {
			templateUrl:'templates/edit.html',
			controller:'voterController'
		})
		.when('/voter/:id/read', {
			templateUrl:'templates/show.html',
			controller:'voterController'
		});
});
