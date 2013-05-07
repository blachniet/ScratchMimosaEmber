require(["common"], function(){
    return require(['app/main', 'ember'], function(App, Ember){
        return window.App = Ember.Application.create(App);
    });
});
