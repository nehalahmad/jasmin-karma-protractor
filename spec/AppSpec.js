/**
 * Filename: AppSpec.js
 * Description: This file is to test unit test cases using Jasmine
 */

 // declare login variable on top
let login;

// these test cases are to test succes cases
describe("Login Authentication", function () {
  // check the correct input values what we have set
  it("Correct values", function () {
    login = new LoginAuthentication("admin", "admin");
    
    expect(login.username).toEqual("admin");
    expect(login.password).toEqual("admin");
  });

  // login success using correct creds
  it("Authenticate successfully", function () {
    login = new LoginAuthentication("admin", "admin");

    expect(login.authenticate()).toBeTruthy();
  });

  // even though having some space in inputs
  it("Authenticate successfully even if credentials containing spaces", function () {
    login = new LoginAuthentication("  admin  ", "  admin  ");

    expect(login.authenticate()).toBeTruthy();
  });
});

// these test cases are to test failed or negative tests
describe("Login Authentication Failed", function () {
  // an excetion will be thrown in case of not entering inputs and click login button
  it("Undefined values", function () {
    expect(() => new LoginAuthentication()).toThrow();
  });
  // check input values
  it("Empty values", function () {
    login = new LoginAuthentication("", "");

    expect(login.username).toEqual("");
    expect(login.password).toEqual("");
  });

  // a well known error will be alerted
  it("Will be failed with wrong credentials", function () {
    login = new LoginAuthentication("root", "root");

    expect(() => login.authenticate()).toThrowError(
      "Invalid Username or Password"
    );
  });
});

// Spy on login authentication function
describe("Jasmine spy", function () {
  it("used the LoginAuthentication to authenticate", function () {
    login = new LoginAuthentication("admin", "admin");
    spyOn(login, "authenticate");
    login.authenticate();

    expect(login.authenticate).toHaveBeenCalled(); // correct function should be called
  });
});
