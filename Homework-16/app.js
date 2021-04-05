class LoginForm {
  constructor(template) {
    this.containerEl = document.querySelector('.container');
    this.formEl = document.getElementById('loginForm')
    this.emailInputEl = document.getElementById('email');
    this.passwordInputEl = document.getElementById('password');
    this.errorEl = document.getElementById('errorText');
    this.template = template.innerHTML;

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
          this._getUsersList(this._renderUserList.bind(this));
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
        data: JSON.parse(xhr.response),
      }
      calback(response);
    }
  }
  _getUsersList(calback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=1');
    xhr.send();
    xhr.onload = () => {
      const response = {
        status: xhr.status,
        users: JSON.parse(xhr.response).data,
      }
      calback(response);
    }
  }
  _renderUserList(data) {
    if (data.status >= 200 && data.status < 300) {
      this.containerEl.innerHTML = '';
      const usersListEl = document.createElement('ul');
      usersListEl.className = 'usersList';
      this.containerEl.append(usersListEl);
      for (let i = 0; i < data.users.length; i++) {
        const user = document.createElement("li");
        user.className = 'user';
        user.innerHTML = this.template
        .replace('{{avatar}}', data.users[i].avatar)
        .replace('{{firstName}}', data.users[i].first_name)
        .replace('{{secondName}}', data.users[i].last_name)
        .replace('{{email}}', data.users[i].email);
        usersListEl.append(user);
      }
    }
  }
}

const template = document.getElementById('usersList-template');

const loginForm = new LoginForm(template);