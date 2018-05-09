myApp.controller('voterController', function($scope,$route,$routeParams,$http){
	$scope.getVoter = function(){
		$http.get('/api/voter/').then(function(response){
			$scope.voters = response.data;
		});
	};
	$scope.showVoter = function(){
		var id = $routeParams.id;
		$http.get('/api/voter/'+ id).then(function(response){
			$scope.voter = response.data;
		});
	};
	$scope.addVoter = function(){
		$http.post('/api/voter/', $scope.voter).then(function(response){
			window.location.href = '/';
		});
	};
	$scope.updateVoter = function(){
		var id = $routeParams.id;
		$http.put('/api/voter/'+ id , $scope.voter).then(function(response){

			//$scope.product = response.data;
			window.location.href = '#/voter';
		});
	};
	$scope.deleteVoter = function(id){
		var id = id;
		$http.delete('/api/voter/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});
