Bindings = { reactive: true };

Bindings._renderVars = function(tpl) {
  for (var k in tpl) {
    Bindings._renderVar(tpl, k);
  }
}

Bindings._renderVar = function(tpl, k) {
  if (!tpl[k] || !tpl[k].get) return;
  var els = $("[data-bind='" + k + "']");
  if (!els.length) return;
  els.each(function() {
    var prop = "text";
    if (["SELECT", "INPUT", "TEXTAREA"].indexOf(this.tagName) > -1) prop = "val";
    if ($(this)[prop]() === tpl[k].get()) return;
    $(this)[prop](tpl[k].get());
  });
}

var bind = function(e, data, tpl) {
  var element = $(e.currentTarget);
  var bind = element.data("bind");
  var prop = element.is("[contenteditable]") ? "text" : "val";
  var value = element[prop]();
  if (!bind) return;
  if (tpl[bind] && tpl[bind].set) {
    tpl[bind].set(value);
  } else {
    tpl[bind] = new ReactiveVar(value);
  }
  if (!Bindings.reactive) return;
  Bindings._renderVar(tpl, bind);
};

Template.body.events({
  "change [data-bind]": bind,
  "input [data-bind]": bind
});
