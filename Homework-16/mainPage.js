class MainPage {
  constructor(userTemplate, mainPageTemplate) {
    this.userTemplate = userTemplate.innerHTML;
    this.mainPageTemplate = mainPageTemplate.innerHTML;
    this.containerEl = document.querySelector('.container');
    this._usersListEl = null;
    this.currentPage = 1;
    this.totalPages = 1;
  }

  init() {
    this.containerEl.innerHTML = this.mainPageTemplate;
    this._usersListEl = document.querySelector('.usersList');
    document.querySelector('.prev').addEventListener('click', this._onPrevBtn.bind(this));
    document.querySelector('.next').addEventListener('click', this._onNextBtn.bind(this));
    this._getUsersList(this._renderUserList.bind(this));
    this._getTotalPages((response) => {
      if (response.status >= 200 && response.status < 300) {
        this.totalPages = response.totalPages;
      }
    });
  }

  _getTotalPages(calback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://reqres.in/api/users`);
    xhr.send();
    xhr.onload = () => {
      const response = {
        status: xhr.status,
        totalPages: JSON.parse(xhr.response).total_pages,
      }
      calback(response);
    }
  }

  _onPrevBtn() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this._getUsersList(this._renderUserList.bind(this), this.currentPage);
    }
  }
  _onNextBtn() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this._getUsersList(this._renderUserList.bind(this), this.currentPage);
    }
  }

  _getUsersList(calback, page) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://reqres.in/api/users?page=${page}`);
    xhr.send();
    xhr.onload = () => {
      const response = {
        status: xhr.status,
        users: JSON.parse(xhr.response).data,
        page: JSON.parse(xhr.response).page,
      }
      calback(response);
    }
  }
  _renderUserList(data) {
    if (data.status >= 200 && data.status < 300) {
      this._usersListEl.innerHTML = '';
      for (let i = 0; i < data.users.length; i++) {
        const user = document.createElement("li");
        user.className = 'user';
        user.innerHTML = this.userTemplate
          .replace('{{avatar}}', data.users[i].avatar)
          .replace('{{firstName}}', data.users[i].first_name)
          .replace('{{secondName}}', data.users[i].last_name)
          .replace('{{email}}', data.users[i].email);
        this._usersListEl.append(user);
      }
    }
  }
}