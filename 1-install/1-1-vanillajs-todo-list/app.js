const addButtonEl = document.querySelector('#add');
const resetButtonEl = document.querySelector('#reset');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = '';
}

function resetGoals(){
  listEl.innerHTML = '';
}

addButtonEl.addEventListener('click', addGoal);
resetButtonEl.addEventListener('click', resetGoals);