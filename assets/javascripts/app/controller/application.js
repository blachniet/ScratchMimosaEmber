define(['ember', 'templates'], function(Ember, templates) {
    var ApplicationController;
    return ApplicationController = Ember.Controller.extend({
        person:{
            firstName: "Trek",
            lastName: "Glowacki",
        },
        year: new Date().getFullYear()
    });
});