class LoginForm {
  constructor() {
    this.containerEl = document.querySelector('.container');
    this.formEl = document.getElementById('loginForm')
    this.emailInputEl = document.getElementById('email');
    this.passwordInputEl = document.getElementById('password');
    this.errorEl = document.getElementById('errorText');

    this.init();
  }

  // "email": "eve.holt@reqres.in",
  //   "password": "cityslicka"

  init() {
    this.formEl.addEventListener('submit', this._onSubmit.bind(this));
  }

  _onSubmit(e) {
    e.preventDefault();
    this._checkUserCredentails(
      this.emailInputEl.value,
      this.passwordInputEl.value,
      (response) => {
        if (response.status >= 200 && response.status <= 300) {
          console.log('success!');
          this.containerEl.innerText = 'success!!';
        } else {
          this.errorEl.innerText = response.data.error;
          this.passwordInputEl.value = '';
        }
      }
    );
  }
  _checkUserCredentails(email, password, calback) {
    const xhr = new XMLHttpRequest();
    const data = {
      email: email,
      password: password,
    }
    xhr.open('POST', 'https://reqres.in/api/login', true);
    xhr.setRequestHeader('Content-Type', 'application/JSON')
    xhr.send(JSON.stringify(data));
    xhr.onload = () => {
      const response = {
        status: xhr.status,
        data: JSON.parse(xhr.response) || xhr.response,
      }
      calback(response);
    }
  }
}

const loginForm = new LoginForm();