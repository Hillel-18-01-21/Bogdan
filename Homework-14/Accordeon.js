function Accordeon(container) {
  this.container = container;
  this.accordeonItems = [];

  this.init();
}

Accordeon.prototype.init = function () {
  Array.prototype.forEach.call(this.container.children, e => {
    this.accordeonItems.push(e.firstElementChild);
  });
  this.accordeonItems.forEach(e => {
    e.addEventListener('click', this._showItemContent.bind(e, this.accordeonItems));
  })
}
Accordeon.prototype._showItemContent = function (allItems) {
  const contentElClassList = this.nextElementSibling.classList;
  if (contentElClassList.contains('active')) {
    contentElClassList.remove('active');
  } else {
    allItems.forEach(e => {
      e.nextElementSibling.classList.remove('active');
    })
    contentElClassList.add('active');
  }
}

// ======================================================================

// class Accordeon {
//   constructor(containerId) {
//     this.container = document.getElementById(containerId);
//     this.accordeonItems = [];

//     this.init();
//   }

//   init() {
//     Array.prototype.forEach.call(this.container.children, e => {
//       this.accordeonItems.push(e.firstElementChild);
//     });
//     this.accordeonItems.forEach(e => {
//       e.addEventListener('click', this._showItemContent.bind(e, this.accordeonItems));
//     })
//   }
//   _showItemContent(allItems) {
//     const contentElClassList = this.nextElementSibling.classList;

//     if (contentElClassList.contains('active')) {
//       contentElClassList.remove('active');
//     } else {
//       allItems.forEach(e => {
//         e.nextElementSibling.classList.remove('active');
//       })
//       contentElClassList.add('active');
//     }
//   }
// }