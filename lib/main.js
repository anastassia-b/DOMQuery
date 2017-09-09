const DomNodeCollection = require("./dom_node_collection");
const _docReady = false;

window.$dom= (arg) => {
  switch(typeof(arg)) {
    case "string":
      const nodes = document.querySelectorAll(arg);
      const nodes_array = Array.from(nodes);
      return new DomNodeCollection(nodes_array);
    case "object":
      if (arg instanceof HTMLElement) {
        return new DomNodeCollection([arg]);
      }
  }
};

$dom.extend = (base, ...otherObjs) => {
  otherObjs.forEach( obj => {
    for (let prop in obj) {
      base[prop] = obj[prop];
    }
  });
  return base;
}


document.addEventListener('DOMContentLoaded', () => {
  _docReady = true;
})
