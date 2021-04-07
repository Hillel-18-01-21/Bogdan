class LoginForm {
  constructor(calback) {
    this.containerEl = document.querySelector('.container');
    this.formEl = document.getElementById('loginForm')
    this.emailInputEl = document.getElementById('email');
    this.passwordInputEl = document.getElementById('password');
    this.errorEl = document.getElementById('errorText');
    this.onLogin = calback;

    this.init();
  }

  init() {
    this.formEl.addEventListener('submit', this._onSubmit.bind(this));
  }

  dispose() {
    this.formEl.removeEventListener('submit', this._onSubmit.bind(this));
  }

  _onSubmit(e) {
    e.preventDefault();
    const promise = this._checkUserCredentails(this.emailInputEl.value, this.passwordInputEl.value);

    promise.then(result => {
      if (result.ok) {
        this.dispose();
        this.onLogin();
      }
        return result.json();
      })
      .then(err => {
        this.errorEl.innerText = err.error || 'something went wrong :('
      })
  }
  _checkUserCredentails(email, password) {
    return fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  }
}