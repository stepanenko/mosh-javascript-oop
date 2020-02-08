
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

  this.render = function() {
    let options = items.map(item => `<option>${item}</option>`).join('\n');
    return `
    <select>
      ${options}
    </select>
    `;
  }

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

function HtmlImageElement(url) {
  this.url = url;

  this.render = function() {
    if (this.url) return `<img src="${this.url}" />`;
    return `<img />`;
  }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const s = new HtmlSelectElement([1,3,5,7]);
const e = new HtmlElement();
const img = new HtmlImageElement('http');

const elements = [
  new HtmlSelectElement([1,3,5,7]),
  new HtmlImageElement('http')
];

for (let el of elements)
  console.log(el.render());
