
const buttons = document.querySelectorAll('.fibBtn');

buttons.forEach((item) => {
  item.addEventListener('click', fibCounter(item));
})

function fibCounter(item) {
  let a = 0;
  let b = a++;
  return () => {
    let temp = a + b;
    a = b;
    b = temp;
    item.nextElementSibling.innerText = b;
  }
}

