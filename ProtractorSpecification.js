//TestSpecification.js
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false);

describe("Login page", function () {
  beforeEach(function () {
    browser.get("http://localhost:8080/login.html");
  });

  it("should render login page", function () {
    // checking the current url
    expect(browser.getCurrentUrl()).toMatch("login.html");
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

      $loginBtn.click();
      expect(browser.getCurrentUrl()).toMatch("/dashboard.html");
      expect(browser.getTitle()).toEqual(":: Dashboard ::");

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

describe("Dashboard page", function () {
  beforeEach(function () {
    browser.get("http://localhost:8080/dashboard.html");
  });

  it("login should be protractor previous page", function () {
    browser.navigate().back();
    expect(browser.getCurrentUrl()).toMatch("/login.html");
  });
});
