const DomNodeCollection = require("./dom_node_collection");

window.$l = (arg) => {
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
