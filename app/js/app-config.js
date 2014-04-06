/**
 * Configuration
 */
angular.module('ic')

    /**
    * Config
    */
    .config(['$routeProvider', 'APIConfigProvider', function ($routeProvider, APIConfigProvider) {
        APIConfigProvider.prefix = 'http://192.168.0.15:8080';

        $routeProvider.

            // main page is the search form
            when('/search', {
                templateUrl: 'js/pages/search/search.html',
                controller: 'SearchCtrl'
            }).

            // meetup detail page
            when('/meetups/:meetupId', {
                templateUrl: 'js/pages/meetup-detail/meetup-detail.html',
                controller: 'MeetupDetailCtrl'
            }).

            // default page
            otherwise({
                redirectTo: '/search'
            });
    }]);