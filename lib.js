Bindings = {};

Bindings.bind = function(tpl) {

  var template = Template[tpl];
  var deps = new Tracker.Dependency;

  template.rendered = function() {
    var tpl = this;
    tpl.autorun(function() {
      deps.depend();
      for (var k in tpl) {
        if (!tpl[k] || !tpl[k].get) continue;
        var els = tpl.$("[data-bind='" + k + "']");
        if (!els.length) continue;
        els.each(function() {
          var prop = "text";
          if (["SELECT", "INPUT", "TEXTAREA"].indexOf(this.tagName) > -1) prop = "val";
          if ($(this)[prop]() === tpl[k].get()) return;
          $(this)[prop](tpl[k].get());
        });
      }
    });
  }

  var bind = function(e, tpl) {
    var element = $(e.currentTarget);
    var bind = element.data("bind");
    var value = element.val();
    if (!bind) return;
    if (tpl[bind] && tpl[bind].set) {
      tpl[bind].set(value);
    } else {
      tpl[bind] = new ReactiveVar(value);
    }
    deps.changed();
  };

  template.events({
    "change [data-bind]": bind,
    "input [data-bind]": bind
  });

}
