/**
 * Filename: conf.js
 * Description: This file contains require configs to run Protractor
 */
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
  },

  // Framework to use. Jasmine is recommended.
  framework: "jasmine",

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ["protractorSpecification.js"],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000,
  },
  seleniumAddress: "http://localhost:4444/wd/hub",
  onPrepare: function () {
    //configure junit xml report

    var jasmineReporters = require("jasmine-reporters");
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        filePrefix: "guitest-xmloutput",
        savePath: "reports",
      })
    );
  },
};
