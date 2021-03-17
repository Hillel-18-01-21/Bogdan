function Hamburger(size) {    
  this.size = size;
  this.price = 0;
  this.calories = 0;
  this.toppings = [];
  this.addTopping = function (topping) {
    this.toppings.push(topping);
    switch (topping) {
      case 'MAYO':
        this.price += 20;
        this.calories += 5;
        break;
      case 'SPICE':
        this.price += 15;
        this.cacaloriesls += 0;
        break;
      case 'POTATO':
        this.price += 15;
        this.calories += 10;
        break;
      case 'SALAD':
        this.price += 20;
        this.calories += 5;
        break;
      case 'CHEESE':
        this.price += 10;
        this.calories += 20;
        break;
    }
  }
  this.getPrice = function () {
    let price = this._getPriceAndCalsForSize(this.size, 1) + this.price;
    console.log('Total price: ' + price + '¥');
  }
  this.getCallories = function () {
    let cals = this._getPriceAndCalsForSize(this.size, 2) + this.calories;
    console.log('All callories: ' + cals);
  }
  this._getPriceAndCalsForSize = function (size, mode) {
    let price;
    let cals;
    switch (size) {
      case 'SMALL':
        price = 50;
        cals = 20;
        break;
      case 'MEDIUM':
        price = 75;
        cals = 30;
        break;
      case 'LARGE':
        price = 100;
        cals = 40;
        break;
    }
    if (mode === 1) {
      return price;
    }else if(mode === 2) {
      return cals;
    }
  }
}

const hamburger = new Hamburger('LARGE');

hamburger.addTopping('MAYO');
hamburger.addTopping('SALAD');
hamburger.getPrice();
hamburger.getCallories();