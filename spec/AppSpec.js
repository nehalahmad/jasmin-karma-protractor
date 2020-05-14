let login;

describe("Login Authentication", function () {
  it("Correct values", function () {
    login = new LoginAuthentication("admin", "admin");

    expect(login.username).toEqual("admin");
    expect(login.password).toEqual("admin");
  });

  it("Authenticate successfully", function () {
    login = new LoginAuthentication("admin", "admin");

    expect(login.authenticate()).toBeTruthy();
  });

  it("Authenticate successfully even if credentials containing spaces", function () {
    login = new LoginAuthentication("  admin  ", "  admin  ");

    expect(login.authenticate()).toBeTruthy();
  });
});

describe("Login Authentication Failed", function () {
  it("Undefined values", function () {
    expect(() => new LoginAuthentication()).toThrow();
  });

  it("Empty values", function () {
    login = new LoginAuthentication("", "");

    expect(login.username).toEqual("");
    expect(login.password).toEqual("");
  });

  it("Will be failed with wrong credentials", function () {
    login = new LoginAuthentication("root", "root");

    expect(() => login.authenticate()).toThrowError(
      "Invalid Username or Password"
    );
  });
});

describe("Jasmine spy", function () {
  it("used the LoginAuthentication to authenticate", function () {
    login = new LoginAuthentication("admin", "admin");
    spyOn(login, "authenticate");
    login.authenticate();

    expect(login.authenticate).toHaveBeenCalled();
  });
});
