Meteor Bindings
=================

Easy two-way data-binding for Blaze

[Demo](https://bindings.meteor.com)  
[Demo code](https://github.com/gwendall/meteor-bindings-demo)  


Installation
------------

``` sh
meteor add gwendall:bindings
```

How it works
----------

1. Set [data-bind] attributes to DOM elements in a given template.
2. Call **Bindings.bind([template_name])**
3. Everytime a change is made on a bound input, a reactive-var will be dynamically created / updated with the new value. And the value / text of every other DOM element within this template with the same [data-bind] attribute will be updated appropriately.
