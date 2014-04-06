angular.module('ic')

	.controller('SearchCtrl', ['$scope', '$http', '$log', '$location', 'APIConfig', function ($scope, $http, $log, $location, APIConfig) {
        $scope.search = function (keyword) {
            $http.get(APIConfig.prefix + '/search/' + keyword)
                .success(function (response) {
                    $scope.meetups = response.results;
                })
                .error(function (message) {
                    $log.info(message);
                });
        };

        $scope.showMeetup = function (meetupId) {
            $log.info('Go to meetup with id ' + meetupId);
            $location.path('/meetups/' + meetupId);
        };
	}]);