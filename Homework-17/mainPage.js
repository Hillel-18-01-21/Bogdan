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

    this._renderUserList();

    this._getTotalPages()
      .then(result => this._ifOk(result))
      .then(result => {
        this.totalPages = result['total_pages'];
      })
  }

  _getUsersList(page, onLoad) {
    return fetch(`https://reqres.in/api/users?page=${page}`);
  }
  _renderUserList() {
    this._getUsersList(this.currentPage)
      .then(result => this._ifOk(result))
      .then(users => {
        this._usersListEl.innerHTML = '';
        for (let i = 0; i < users.data.length; i++) {
          const user = document.createElement("li");
          user.className = 'user';
          user.innerHTML = this.userTemplate
            .replace('{{avatar}}', users.data[i].avatar)
            .replace('{{firstName}}', users.data[i].first_name)
            .replace('{{secondName}}', users.data[i].last_name)
            .replace('{{email}}', users.data[i].email);
          this._usersListEl.append(user);
        }
      })
      .catch(err => {
        console.dir(err);
        document.body.removeChild(this.containerEl);
        alert('Something went wrong :(');
        if(confirm('Reload the page?'))location.reload();
      })
  }

  _ifOk(result) {
    if (result.ok) {
      return result.json();
    }
  }

  _getTotalPages() {
    return fetch('https://reqres.in/api/users');
  }

  _onPrevBtn() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this._renderUserList();
    }
  }
  _onNextBtn() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this._renderUserList();
    }
  }
}

// ============================================================

// class MainPage {
//   constructor(userTemplate, mainPageTemplate) {
//     this.userTemplate = userTemplate.innerHTML;
//     this.mainPageTemplate = mainPageTemplate.innerHTML;
//     this.containerEl = document.querySelector('.container');
//     this._usersListEl = null;
//     this.currentPage = 1;
//     this.totalPages = 1;
//   }

//   init() {
//     this.containerEl.innerHTML = this.mainPageTemplate;
//     this._usersListEl = document.querySelector('.usersList');
//     document.querySelector('.prev').addEventListener('click', this._onPrevBtn.bind(this));
//     document.querySelector('.next').addEventListener('click', this._onNextBtn.bind(this));

//     this._getUsersList(this.currentPage, this._renderUserList.bind(this));

//     this._getTotalPages()
//       .then(result => this._ifOk(result))
//       .then(result => {
//         this.totalPages = result['total_pages'];
//       })
//   }

//   _getUsersList(page, onLoad) {
//     fetch(`https://reqres.in/api/users?page=${page}`)
//       .then(result => this._ifOk(result))
//       .then(result => onLoad(result))
//       .catch(err => {
//         console.dir(err);
//         document.body.removeChild(this.containerEl);
//         alert('Something went wrong :(');
//         if (confirm('Reload the page?')) location.reload();
//       })
//   }

//   _renderUserList(users) {
//     this._usersListEl.innerHTML = '';
//     for (let i = 0; i < users.data.length; i++) {
//       const user = document.createElement("li");
//       user.className = 'user';
//       user.innerHTML = this.userTemplate
//         .replace('{{avatar}}', users.data[i].avatar)
//         .replace('{{firstName}}', users.data[i].first_name)
//         .replace('{{secondName}}', users.data[i].last_name)
//         .replace('{{email}}', users.data[i].email);
//       this._usersListEl.append(user);
//     }
//   }

//   _ifOk(result) {
//     if (result.ok) {
//       return result.json();
//     }
//   }

//   _getTotalPages() {
//     return fetch('https://reqres.in/api/users');
//   }

//   _onPrevBtn() {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//       this._getUsersList(this.currentPage, this._renderUserList.bind(this));
//     }
//   }
//   _onNextBtn() {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//       this._getUsersList(this.currentPage, this._renderUserList.bind(this));
//     }
//   }
// }