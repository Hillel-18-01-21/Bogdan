class ToDoConstructor {
  constructor(constructorEl, toDoListEl) {
    this.constructorEl = constructorEl;
    this._inputToDoEl = null;
    this._constructorFrom = null;
    this._toDoList = new ToDoList(toDoListEl);

    this.init();
  }

  init() {
    const html = `
    <div class="constructor__title">ToDo List</div>
    <form class="constructor__form">
      <input type="text" id="inputToDo" class="constructotr__input" placeholder="Description">
      <button type="submit" class="constructor__btn">Add</button>
    </form>
    `;
    this.constructorEl.html(html);
    this._inputToDoEl = $('#inputToDo');
    this._constructorFrom = $('.constructor__form');
    this._constructorFrom.on('submit', this, this._onAddBtnClick);
  }
  _onAddBtnClick(e) {
    e.preventDefault();
    const toDoText = e.data._inputToDoEl.val();
    if (toDoText) {
      e.data._inputToDoEl.val('');
      e.data._toDoList._addToDo(toDoText);
    }
  }
}