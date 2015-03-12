Meteor Bindings
=================

Easy two-way data-binding with Blaze

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
2. That's it. Everytime a change is made on a bound input, a reactive-var will be dynamically created / updated with the new value in the parent template instance of the input. And the value / text of every other DOM element in the entire DOM with the same [data-bind] attribute will be updated appropriately.

Options
----------

**Bindings.reactive = Boolean** (true by default)  
Whether or not the DOM should be updated reactively.  
Set it to false if you want to only use the package to bind inputs to reactive-vars, or trigger the DOM update yourself with one of the methods below.

Methods
----------

**Bindings._renderVar([template_instance], [property])**  
Updates the DOM elements bound to a given reactiveVar of the provided template instance.

**Bindings._renderVars([template_instance])**  
Updates the DOM elements bound to all the reactiveVars of the provided template instance.
