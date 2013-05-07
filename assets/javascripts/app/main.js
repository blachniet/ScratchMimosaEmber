define(['app/controller/application', 'app/controller/index'], function(ApplicationController, IndexController) {
    console.log("In app/main");
    console.log(ApplicationController);
  var App;
  return App = {
    ApplicationController: ApplicationController,
    IndexController: IndexController
  };
});
