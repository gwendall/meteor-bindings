Package.describe({
  name: "gwendall:bindings",
  summary: "Easy two-way data-binding with Blaze",
  git: "https://github.com/gwendall/meteor-bindings.git",
  version: "0.1.2"
});

Package.onUse(function (api, where) {

  api.use([
    "jquery@1.11.3",
    "reactive-var@1.0.4",
    "templating@1.0.11",
    "tracker@1.0.5"
  ], "client");

  api.addFiles([
    "lib.js",
  ], "client");

  api.export("Bindings", "client");

});
