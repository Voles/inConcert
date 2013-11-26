/**
* 'ic' is here set as the namespace of the application.
* The empty array means there are no dependencies for this module.
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
                templateUrl: 'js/pages/phone-detail.html',
                controller: 'MeetupDetail'
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