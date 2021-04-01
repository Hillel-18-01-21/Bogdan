class LoginForm {
  constructor() {
    this.emailInputEl = document.getElementById('email');
    this.passwordInputEl = document.getElementById('password');
    this.submitButton = document.getElementById('submitBtn');
    this.errorEl = document.getElementById('errorText');
    this.containerEl = document.querySelector('.container');
    this.xhr = new XMLHttpRequest();
    this.data = {};

    this.init();
  }

  // "email": "eve.holt@reqres.in",
  //   "password": "cityslicka"

  init() {
    this.submitButton.addEventListener('click', this._onButtonClick.bind(this));
  }

  _onButtonClick(e) {
    e.preventDefault();
    this.data.email = this.emailInputEl.value;
    this.data.password = this.passwordInputEl.value;
    this.login(this.data);
  }

  login(data) {
    this.xhr.open('POST', 'https://reqres.in/api/login', true);
    this.xhr.setRequestHeader('Content-Type', 'application/JSON')
    this.xhr.send(JSON.stringify(data));
    this.xhr.onload = () => {
      if (this.xhr.status == 200) {
        console.log('success!!');
        this.containerEl.innerText = 'success!!';
      } else {
        this.errorEl.innerText = JSON.parse(this.xhr.response).error;
        this.passwordInputEl.value = '';
      }
    }
  }
}

const loginForm = new LoginForm();

