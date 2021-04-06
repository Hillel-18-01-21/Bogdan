const userTemplate = document.getElementById('usersList-template');
const mainPageTemplate = document.getElementById('mainPage-template');

const loginForm = new LoginForm(onLogin);
const mainPage = new MainPage(userTemplate, mainPageTemplate);

function onLogin(){
  mainPage.init();
}

  // "email": "eve.holt@reqres.in",
  //   "password": "cityslicka"
