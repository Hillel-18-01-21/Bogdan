let _value = 0;

add = (num) => {
  _value += num;
}
mult = (num) => {
  _value *= num;
}
div = (num) => {
  _value /= num;
}
sub = (num) => {
  _value -= num;
}

set = (val) => {
  _value = val;
}
getResult = () => {
  return _value;
}
printResult = () => {
  console.log(_value);
}

module.exports = {
  add,
  mult,
  div,
  sub,
  set,
  getResult,
  printResult,
}