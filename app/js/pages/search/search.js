angular.module('ic')

	.controller('SearchCtrl', ['$scope', '$http', function ($scope, $http) {
		console.log('- SearchCtrl init');
		
		$http.get('http://localhost:8080/search/akka')
			.success(function (response) {
				console.log(response.results);
				$scope.meetups = response.results;
			})
			.error(function (message) {
				console.log(message);
			});
	}]);
