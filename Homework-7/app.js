const inputDescription = document.getElementById('inputDescription');
const listContainer = document.getElementById('list');
const listItems = document.getElementsByClassName('list__item');
const addBtn = document.getElementById('AddElementBtn');

addBtn.addEventListener('click', addElement);
listContainer.addEventListener('click', (event) => {
  const target = event.target;
  const parentEl = target.parentElement;
  parentEl.lastElementChild.checked += -1;
  target.checked += -1;
  parentEl.classList.toggle('checked');
  if (target.id === 'delete') {
    parentEl.remove();
  }
})
inputDescription.addEventListener('click', clearDescription);

function addElement() {
  if (inputDescription.value !== '') {
    const listEl = document.createElement('li');
    listEl.className = 'list__item';
    listEl.innerHTML = `
    <span class="list__item__content">&bull; ${inputDescription.value}</span>
    <img src="img/trash.svg" class="delete" id="delete" alt="trash">
    <input type="checkbox" id="checkbox" class="list__item__checkbox">
  `;
    listContainer.appendChild(listEl);
    clearDescription();
  }
}

function clearDescription() {
  inputDescription.value = '';
}