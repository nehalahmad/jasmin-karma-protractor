/**
 * Filename: ProtractorSpecification.js
 * Description: This file contains all the integration test cases
 */

browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false);

// test cases for login page
describe("Login page", function () {
  // set command configs which is run before every test cases
  beforeEach(function () {
    browser.get("http://localhost:8080/login.html");
  });

  it("should render login page", function () {
    // checking the current url
    expect(browser.getCurrentUrl()).toMatch("login.html");
    // check the correct page title
    expect(browser.getTitle()).toEqual(":: Login ::");
  });

  describe("Login success or fail", function () {
    // find page elements
    let $username = element(by.id("inputUser"));
    let $password = element(by.id("inputPassword"));
    let $loginBtn = element(by.id("loginBtn"));

    it("login success", function () {
      // fill the input fields
      $username.sendKeys("admin");
      $password.sendKeys("admin");
      // ensure fields contain what we've entered
      expect($username.getAttribute("value")).toEqual("admin");
      expect($password.getAttribute("value")).toEqual("admin");

      $loginBtn.click(); // fire click handler of login button
      expect(browser.getCurrentUrl()).toMatch("/dashboard.html");
      expect(browser.getTitle()).toEqual(":: Dashboard ::"); // check the dashboard page title

      element(by.linkText("Logout")).click();
      expect(browser.getCurrentUrl()).toMatch("/login.html");
    });

    it("login failed", function () {
      // fill the input fields
      $username.sendKeys("");
      $password.sendKeys("");
      // ensure fields contain what we've entered
      expect($username.getAttribute("value")).toEqual("");
      expect($password.getAttribute("value")).toEqual("");

      $loginBtn.click();
      expect(browser.getCurrentUrl()).toMatch("/login.html");
    });
  });
});

// login page should be dashboard's previous page always
describe("Dashboard page", function () {
  beforeEach(function () {
    browser.get("http://localhost:8080/dashboard.html");
  });

  it("login should be protractor previous page", function () {
    browser.navigate().back(); // fire browser click button
    expect(browser.getCurrentUrl()).toMatch("/login.html");
  });
});
