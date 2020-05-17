# NPM module dependencies
To run application in localhost - 'http-server'. To generate report of integration testing - 'jasmine-reporters'.
To run integration test cases - 'protractor'

## How to use application

### Run all the below commands from the command propmt on the root directory
To install all npm modules, run command -
### npm i

Start http server -
### http-server
and access the application using http://localhost:8080/login.html

Strat Selenium server using command -
### webdriver-manager update 
and then - 
### webdriver-manager start

Run protractor test to test integration testing. 'conf.js' is configuration file for protractor. Protractor test file is 'ProtractorSpecification.js'. Run this command to test integration tests - 
### Protractor conf.js

To test unit test cases access SpecRunner.html from localhost
### http://localhost:8080/specRunner.html

### Note: If face any permission issue while running these commands using vs code terminal, then run these commands using CMD terminal.