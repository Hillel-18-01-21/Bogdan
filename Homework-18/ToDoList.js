class ToDoList {
  constructor(toDoListEl) {
    this._toDoListEl = toDoListEl;
    this._toDoList = [];

    this.init();
  }

  init() {
    this._toDoListEl.on('click', this, this._checkToDoEl);
    this._toDoListEl.on('click', this, this._delToDoEl);
  }
  _addToDo(text) {
    this._toDoList.push(text);
    this._renderList(this._toDoList);
  }
  _renderList(list) {
    $(this._toDoListEl).html('');
    for (let i = 0; i < list.length; i++) {
      const html = `
      <li class="list__item" id="${i}">
        <span class="list__item__content">${i + 1}) ${list[i]}</span>
        <img src="img/trash.svg" class="delete" id="delete" alt="trash">
        <input type="checkbox" id="checkbox" class="list__item__checkbox">
      </li>
      `;
      $(this._toDoListEl).append(html);
    }
  }
  _checkToDoEl(e) {
    $(e.target.parentElement).toggleClass('checked');
    e.target.parentElement.lastElementChild.checked += -1;
    e.target.checked += -1;
  }
  _delToDoEl(e) {
    if ($(e.target).attr('id') == 'delete') {
      const item = $(e.target.parentElement);
      const index = item.attr('id');      
      e.data._toDoList.splice(index, 1);
      $(item).hide(400, function () {
        this.remove();
        e.data._renderList(e.data._toDoList);
      });
    }
  }
}