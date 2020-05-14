function loginHandler() {
  const { username, password } = document.forms.signinForm;

  try {
    const login = new LoginAuthentication(username.value, password.value);
    if (login.authenticate()) {
      window.location = "dashboard.html";
    }
  } catch (e) {
    document.forms.signinForm.reset();
    alert(e);
  }
}

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
