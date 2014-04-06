/**
* 'ic' is here set as the namespace of the application.
* ngRoute manages the url state and is a dependency for the ic module
*/
angular.module('ic', ['ngRoute', 'ngSanitize'])

    /**
     * API provider
     */
    .provider('APIConfig', function () {
        var that = this;
        this.prefix = '';

        this.$get = function () {
            return {
                prefix: that.prefix
            };
        };
    })

    /**
    * Configuration
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
    }])



    /**
    * Run
    */
    .run([function () { }]);