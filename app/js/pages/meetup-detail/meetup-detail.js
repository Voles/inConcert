angular.module('ic')

	.controller('MeetupDetailCtrl', ['$scope', '$routeParams', '$http', 'APIConfig', function ($scope, $routeParams, $http, APIConfig) {
        $scope.meetup = {};
        $scope.feedback = '';

        var meetupId = $routeParams.meetupId;

        $http.get(APIConfig.prefix + '/meetups/' + meetupId)
            .success(function (data) {
                $scope.meetup = data;
                $scope.feedback = '';
            })
            .error(function (error) {
                $scope.feedback = error;
            });
	}]);