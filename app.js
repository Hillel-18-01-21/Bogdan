const firstOperand   = document.getElementById('firstOperand')
const secondOperand  = document.getElementById('secondOperand')
const operations     = document.getElementById('operations')
const calcBtn        = document.getElementById('calcBtn')
const calcList       = document.getElementById('calcList')
const deleteBtn      = document.getElementById('deleteBtn')
const inputForm      = document.querySelector('.input-form')
const liTemplate     = document.getElementById('li-template')
const ENTER_KEY_CODE =  13
calcBtn.keyCode      = ENTER_KEY_CODE


calcBtn.      addEventListener('click', getResult)
calcList.     addEventListener('click', deleteListItem)
firstOperand. addEventListener('input', realTimeValidation)
secondOperand.addEventListener('input', realTimeValidation)
inputForm.    addEventListener('keypress', enterKeyFunc)

function getResult() {
  const a = firstOperand.value
  const b = secondOperand.value
  if(controlValidation(a,b)){
    const operation = operations.value
    const result    = runCalculations(a, b, operation)
    showResult(a, b, operation, result)
    firstOperand.value  = ''
    secondOperand.value = ''
  }
}

function showResult(a, b, operation, result) {
  const listItem     = document.createElement('li')
  listItem.className = 'calculations__item'
  listItem.innerHTML = liTemplate.innerHTML
    .replace('{{time}}', getTime())
    .replace('{{a}}', a)
    .replace('{{operation}}', operation)
    .replace('{{b}}', b)
    .replace('{{result}}', result)
  calcList.append(listItem)
}

function deleteListItem(event) {
  if (event.target.id === 'deleteBtn') {
    event.target.parentNode.remove()
  }
}

function realTimeValidation(e) {
  if (+e.target.value !== +e.target.value || e.target.value === '') {
    e.target.classList.add('wrong-value')
    calcBtn.removeEventListener('click', getResult)
  } else {
    e.target.classList.remove('wrong-value')
    calcBtn.addEventListener('click', getResult)
  }
}

function controlValidation(a,b){
  let isValid = false
  if(a === '' && b === ''){
    firstOperand.classList.add('wrong-value')
    secondOperand.classList.add('wrong-value')
  }else if(b === '' || +b !== +b){
    secondOperand.classList.add('wrong-value')
  }else if(a === '' || +a !== +a){
    firstOperand.classList.add('wrong-value')
  }else {
    firstOperand.classList.remove('wrong-value')
    secondOperand.classList.remove('wrong-value')
    isValid = true
  }
  return isValid
}

function enterKeyFunc(e){
  if(e.keyCode === ENTER_KEY_CODE){
    getResult()
  }  
}

function getTime() {
  const date = new Date()
  let hour = date.getHours()
  let min = date.getMinutes()
  min = (min < 10 ? '0' : '') + min
  return hour + ':' + min
}

function runCalculations(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b
    case "-":
      return a - b
    case "*":
      return a * b
    case "/":
      return a / b
    case "%":
      return a % b
  }
}