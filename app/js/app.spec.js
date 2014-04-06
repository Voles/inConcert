describe('the application', function () {
    var $route;

    beforeEach(module('ic'));

    beforeEach(inject(function (_$route_) {
        $route = _$route_;
    }));

    it('should have the search route configured', function () {
        expect($route.routes['/search']).toBeDefined();
        expect($route.routes['/search'].controller).toBe('SearchCtrl');
        expect($route.routes['/search'].templateUrl).toBe('js/pages/search/search.html');
    });

    it('should have the meetup detail route configured', function () {
        expect($route.routes['/meetups/:meetupId']).toBeDefined();
        expect($route.routes['/meetups/:meetupId'].controller).toEqual('MeetupDetailCtrl');
        expect($route.routes['/meetups/:meetupId'].templateUrl).toEqual('js/pages/meetup-detail/meetup-detail.html');
    });

    it('should have the search route as default route', function () {
        expect($route.routes[null].redirectTo).toBe('/search');
    });

});