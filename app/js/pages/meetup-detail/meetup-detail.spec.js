describe('the Meetup Detail controller', function () {
    var $scope, $httpBackend, meetupDetailCtrl, meetup;

    beforeEach(module('ic'));

    beforeEach(inject(function (_$rootScope_, _$httpBackend_, _$controller_, _APIConfig_) {
        $httpBackend = _$httpBackend_;
        $scope = _$rootScope_.$new();
        APIConfig = _APIConfig_;
        APIConfig.prefix = '';

        // create controller
        meetupDetailCtrl = _$controller_('MeetupDetailCtrl', {
            $scope: $scope,
            $routeParams: { meetupId: 1 }
        });
    }));

    beforeEach(function () {
        meetup = { id: 1 };
        $httpBackend.whenGET('/meetups/1').respond(function () {
            return [200, meetup];
        });
    })

    it('should fetch the meetup information on initialization', function () {
        $httpBackend.expectGET('/meetups/1');
        $httpBackend.flush();

        expect($scope.meetup).toEqual(jasmine.any(Object));
        expect($scope.meetup.id).toEqual(1);
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});