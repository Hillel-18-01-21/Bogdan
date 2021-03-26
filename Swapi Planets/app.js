class SearchPlanets {
  constructor() {
    this.inputPlanet = document.getElementById('inputPlanet');
    this.searchPlanet = document.getElementById('searchPlanet');
    this.planetContainer = document.getElementById('planetContainer');
    this.xhr = new XMLHttpRequest();
    this.currentPlanet = this.getPlanet();
    this.currentPlanetNumber = 0;

    this.start();
  }
  _inputValidation(){
    const value = this.inputPlanet.value;
    if(+value !== +value || value < 1 || value > 60){
      return true;
    }
  }
  _onInputValidation(e) {
    if (this._inputValidation()) {
      e.target.classList.add('error');
    } else {
      e.target.classList.remove('error');
    }
  }
  _onInputKeyPress(e){
    if(e.keyCode === 13 && !this._inputValidation()){
      this.currentPlanetNumber = this.inputPlanet.value;
      this.getPlanet();
      this.renderPlanet();
    }
  }
  _onSearchBtnClick() {
    if (this._inputValidation()) {
      console.log('error');
    } else {
      this.currentPlanetNumber = this.inputPlanet.value;
      this.getPlanet();
      this.renderPlanet();
    }
  }  
  _onXHRLoad = function () {
    console.log(JSON.parse(this.xhr.responseText));
    this.currentPlanet = JSON.parse(this.xhr.responseText);
  }
  _showPrevOrNextPlanet(e) {
    if (this.currentPlanetNumber > 1 && e.target.id === 'prevBtn') {
      this.currentPlanetNumber--;
      this.getPlanet();
      this.renderPlanet();
    } else if (this.currentPlanetNumber < 60 && e.target.id === 'nextBtn') {
      this.currentPlanetNumber++;
      this.getPlanet();
      this.renderPlanet();
    } else {
      console.log('error');
    }
  }
  getPlanet() {
    this.xhr.open('GET', `https://swapi.dev/api/planets/${this.currentPlanetNumber}/`, false);
    this.xhr.send();
    this.xhr.onload = this._onXHRLoad.bind(this);
  }
  renderPlanet() {
    const html = `
    <div class="planet">
      <div class="plant__name">${this.currentPlanet.name}</div>
      <div class="planet__properties">
        <div class="planet__prop__item">Rotation period: ${this.currentPlanet.rotation_period}</div>
        <div class="planet__prop__item">Orbital period: ${this.currentPlanet.orbital_period}</div>
        <div class="planet__prop__item">Diameter: ${this.currentPlanet.diameter}</div>
        <div class="planet__prop__item">Climate: ${this.currentPlanet.climate}</div>
        <div class="planet__prop__item">Gravity: ${this.currentPlanet.gravity}</div>
        <div class="planet__prop__item">Population: ${this.currentPlanet.population}</div>
        <div class="planet__prop__item">Created: ${this.currentPlanet.created}</div>
      </div>
      <div class="planet__pagination">
        <button class="prev-btn" id="prevBtn">Prev</button>
        <span class="current-page">${this.currentPlanetNumber}</span>
        <button class="next-btn" id="nextBtn">Next</button>
      </div>
    </div>
  `;
    this.planetContainer.innerHTML = html;
  }
  start() {
    this.searchPlanet.addEventListener('click', this._onSearchBtnClick.bind(this));
    this.planetContainer.addEventListener('click', this._showPrevOrNextPlanet.bind(this));
    this.inputPlanet.addEventListener('input', this._onInputValidation.bind(this));
    this.inputPlanet.addEventListener('keypress', this._onInputKeyPress.bind(this));
  }
}

const searchPlanet = new SearchPlanets();

// ==========================а