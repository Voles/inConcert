InConcert
=========

> In concert - with a common plan; "act in concert"

#### Goal

To create a web application which allows users to search, view and RSVP for [Meetups](http://www.meetup.com/).
Using modern web technologies and the [Meetup API](http://www.meetup.com/meetup_api/).

#### Prerequisites

* [Node Package Manager](https://npmjs.org/) (NPM)
* [Git](http://git-scm.com/)

*Note: [installation instructions for NodeJS on Ubuntu](http://stackoverflow.com/questions/16302436/install-nodejs-on-ubuntu-12-10/16303380#16303380)*

#### Dependencies

* [Grunt](http://gruntjs.com/)
* [Bower](http://bower.io/)

## Environment setup
#### 1. Install Grunt and Bower

    $ sudo npm install -g grunt-cli bower
    
#### 2. Install project dependencies
Run the commands below in the project root directory.

    $ sudo npm install
    $ sudo ./node_modules/protractor/bin/webdriver-manager update
    $ bower install

## Build instructions
To run the application server, run `$ grunt server` inside the project directory.

To run the tests (both unit- and E2E tests), run `$ grunt test` inside the project directory.
