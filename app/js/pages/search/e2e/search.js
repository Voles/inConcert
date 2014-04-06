describe('the Search page', function() {
    var searchPage = require('./page.js');

    beforeEach(function() {
        // navigate to search page
        searchPage.get();
    });

    it('should show no meetups by default', function() {
        searchPage.meetupsList.count().then(function (meetupCount) {
            expect(meetupCount).toEqual(0);
        });
    });

    it('should update the title with the keyword', function () {
        searchPage.typeKeyword('akka');
        expect(searchPage.titleKeyword.getText()).toEqual('akka');
    });

    it('should show meetups after a search for akka', function() {
        searchPage.keywordInput.sendKeys('akka');
        searchPage.searchButton.click().then(function () {
            searchPage.meetupsList.count().then(function (meetupCount) {
                expect(meetupCount).toEqual(5);
            });
        });
    });
});