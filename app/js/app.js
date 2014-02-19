/**
* 'ic' is here set as the namespace of the application.
* ngRoute manages the url state and is a dependency for the ic module
*/
angular.module('ic', ['ngRoute'])

    /**
    * Configuration
    */
    .config(['$routeProvider', function ($routeProvider) {
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
    }])

    /**
    * Run
    */
    .run([function () {
        console.log('The application is running!');
    }]);