/**
 * Filename: App.js
 * Description: This file contains required functions to authenticate login
 */
function loginHandler() {
  const { username, password } = document.forms.signinForm; // read input values

  // handle exception
  try {
    const login = new LoginAuthentication(username.value, password.value);
    if (login.authenticate()) {
      window.location = "dashboard.html"; // redirect to dashboard page, in case of success
    }
  } catch (e) {
    document.forms.signinForm.reset();  // empty the form, in case password is saved
    alert(e);
  }
}

/**
 * LoginAuthentication class
 */
class LoginAuthentication {
  constructor(username, password) {
    this.username = username.trim();
    this.password = password.trim();
  }

  authenticate() {
    if (this.username === "admin" && this.password === "admin") {
      return true;
    } else {
      throw new Error("Invalid Username or Password");
    }
  }
}
