requirejs.config({
  shim: {
    handlebars: {
      deps: [],
      exports: "Handlebars"
    },
    ember: {
      deps: ["handlebars", "jquery"],
      exports: "Ember"
    }
  },
  paths: {
    jquery: "vendor/jquery",
    handlebars: "vendor/handlebars",
    ember: "vendor/ember"
  }
});
