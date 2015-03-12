Package.describe({
  name: "gwendall:bindings",
  summary: "Easy two-way data-binding with Blaze",
  version: "0.1.0"
});

Package.on_use(function (api, where) {

  api.use([
    "jquery",
    "tracker",
    "templating",
    "reactive-var"
  ], "client");

  api.add_files([
    "lib.js",
  ], "client");

  api.export("Bindings", "client");

});
