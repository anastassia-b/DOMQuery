# DOMQuery

DOMQuery is a small JavaScript library inspired by the core functionality of jQuery. It makes it easier to do event handling, document traversal and manipulation, and Ajax requests.

### Functionality

There are 4 main ways to use `$dom`:
```
$dom(selector) {}
$dom(HTMLElement) {}
$dom(documentReadyCallback) {}
$dom.ajax() {}
```
Passing in a CSS selector or an HTMLElement returns a new instance of a `DomNodeCollection`. Additionally, `$dom` can take functions to be executed when the document is ready.

The `DomNodeCollection` class has the following methods: each(callback), html(html), empty(), append(children), attr(key, val), addClass(newClass), removeClass(oldClass), toggleClass(), find(selector), remove(), children(), parent(), on(eventName, callback), off(eventName).
