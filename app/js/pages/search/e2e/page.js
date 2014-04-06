// page object
var SearchPage = function() {

    // elements
    this.keywordInput = element(by.css('input#keyword'));
    this.searchButton = element(by.css('button[type="submit"]'));
    this.titleKeyword = element(by.css('h2.lead .keyword'));

    // repeaters
    this.meetupsList = element.all(by.repeater('meetup in meetups | filter:keyword'));

    // general
    this.get = function() {
        browser.get('http://localhost:9000/#/search');
    };

    this.typeKeyword = function (keyword) {
        this.keywordInput.sendKeys(keyword);
    };
};

module.exports = new SearchPage();