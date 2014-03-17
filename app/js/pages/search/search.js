angular.module('ic')

	.controller('SearchCtrl', ['$scope', '$http', '$log', '$location', function ($scope, $http, $log, $location) {
		$http.get('http://192.168.0.15:8080/search/akka')
			.success(function (response) {
				$scope.meetups = response.results;
			})
			.error(function (message) {
				$log.info(message);
			});

        $scope.showMeetup = function (meetupId) {
            $log.info('Go to meetup with id ' + meetupId);
            $location.path('/meetups/' + meetupId);
        };
	}]);