function calc(value){
  return{
    add: function(number){
      value += number;
    },
    sub: function(number){
      value -= number;
    },
    div: function(number){
      value /= number;
    },
    mult: function(number){
      value *= number;
    },
    getResult: function(){
      return value;
    }
  }
}
const first = calc(4);

first.add(33);
first.sub(12);
first.div(2);
first.mult(4);

console.log(first.getResult());