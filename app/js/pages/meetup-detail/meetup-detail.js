angular.module('ic')

	.controller('MeetupDetailCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
        $scope.meetup = {};
        $scope.feedback = '';

        var meetupId = $routeParams.meetupId;

        $http.get('http://192.168.0.15:8080/meetups/' + meetupId)
            .success(function (data) {
                $scope.meetup = data;
                $scope.feedback = '';
            })
            .error(function (error) {
                $scope.feedback = error;
            });
	}]);