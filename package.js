Package.describe({
  name: "gwendall:bindings",
  summary: "Easy two-way data-binding with Blaze",
  git: "https://github.com/gwendall/meteor-bindings.git",
  version: "0.1.0"
});

Package.onUse(function (api, where) {

  api.use([
    "jquery",
    "tracker",
    "templating",
    "reactive-var"
  ], "client");

  api.addFiles([
    "lib.js",
  ], "client");

  api.export("Bindings", "client");

});
