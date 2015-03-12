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

Options
----------

**reactive: Boolean**  
Whether or not the DOM should be updated reactively (true by default).  
If set to true, the package uses the templated.created method to track changes of the bound inputs and update the DOM.  
Hence, if you want to use your own template.created method, or trigger the DOM update through a given event, just call Bindings._renderVars(tplInstance) whenever you want to re-render the bound DOM elements.
