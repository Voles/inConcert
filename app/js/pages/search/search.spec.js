describe('the Search controller', function () {

    var $controller, $scope, $httpBackend, $location, searchCtrl;

    beforeEach(module('ic'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _$httpBackend_, _$location_, _APIConfig_) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;
        $location = _$location_;
        APIConfig = _APIConfig_;
        APIConfig.prefix = '';
        searchCtrl = $controller('SearchCtrl', { $scope: $scope });
    }));

    beforeEach(function () {
        var meetupList = [{id: 1}, {id: 2}];

        $httpBackend.whenGET('/search/test').respond(function () {
            return [200, {results: meetupList}];
        });
    });

    it('should hold a list with meetups after performing a search', function () {
        $httpBackend.expectGET('/search/test');
        $scope.search('test');
        $httpBackend.flush();

        expect($scope.meetups).toBeDefined();
        expect($scope.meetups[0]).toEqual(jasmine.any(Object));
        expect($scope.meetups[0].id).toEqual(1);

        expect($scope.meetups[1]).toEqual(jasmine.any(Object));
        expect($scope.meetups[1].id).toEqual(2);
    });

    it('should navigate to the the detail page of a meetup', function () {
        $scope.showMeetup(1);
        expect($location.path()).toBe('/meetups/1');
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});