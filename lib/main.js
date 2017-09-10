const DomNodeCollection = require("./dom_node_collection");

let _docReady = false;
const _docReadyCallbacks = [];

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

$dom.ajax = options => {
  const request = new XMLHttpRequest();
  const defaults = {
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    method: "GET",
    url: "",
    success: () => {},
    error: () => {},
    data: {},
  };
  options = $l.extend(defaults, options);
  options.method = options.method.toUpperCase();

  if (options.method === "GET"){
    options.url += "?" + toQueryString(options.data);
  }

  request.open(options.method, options.url, true);
  request.onload = e => {
    if (request.status === 200) {
      options.success(request.response);
    } else {
      options.error(request.response);
    }
  };

  request.send(JSON.stringify(options.data));
};

toQueryString = obj => {
  let result = "";
  for(let prop in obj){
    if (obj.hasOwnProperty(prop)){
      result += prop + "=" + obj[prop] + "&";
    }
  }
  return result.substring(0, result.length - 1);
};

document.addEventListener('DOMContentLoaded', () => {
  _docReady = true;
  _docReadyCallbacks.forEach ( func => func() );
})
