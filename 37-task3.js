
function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  }
}

HtmlElement.prototype.focus = function() {
  console.log('focused');
}

function HtmlSelectElement(array = []) {
  let items = array;
  this.addItem = function(...item) {
    items.push(...item);
  }
  this.removeItem = function(item) {
    items = items.filter(i => i !== item)
  }

  Object.defineProperty(this, 'items', {
    get: function() {
      return items;
    }
  });
}

// My solution:
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// Object.assign(HtmlSelectElement.prototype, new HtmlElement());

// Mosh solution:
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement();
const s2 = new HtmlSelectElement.prototype.constructor();
const e = new HtmlElement();
