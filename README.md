# NPM module dependencies
To run application in localhost - 'http-server'. To generate report of integration testing - 'jasmine-reporters'.
To run integration test cases - 'protractor'

## Run all the below commands from the command propmt on the root directory
To install all npm modules, run command -
# npm i

Start http server -
# http-server

Strat Selenium server -
# webdriver-manager update 
and then - 
# webdriver-manager start

Run protractor test to test integration testing. 'conf.js' is configuration file for protractor. Protractor file is 'ProtractorSpecification.js'
# Protractor conf.js

To test unit test cases access specRunner.html from localhost
# http://localhost:8080/specRunner.html