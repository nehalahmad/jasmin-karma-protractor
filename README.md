# NPM module dependencies
to run application in localhost - http-server
to generate report of integration testing -jasmine-reporters
to run integration test cases - protractor

# To install all npm modules, run command -
npm i

# Start http server -
http-server

# Strat Selenium server -
webdriver-manager update
webdriver-manager start

# Run protractor test to test integration testing
# 'conf.js' is configuration file for protractor
# Protractor file is 'ProtractorSpecification.js'
Protractor conf.js

# To test unit test cases access specRunner.html from localhost
http://localhost:8080/specRunner.html