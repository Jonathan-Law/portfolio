module.exports = ngModule => {
  require('./main-route.component.css');

  ngModule.component('mainRoute', {
    template: require('./main-route.component.html'),
    controller: mainRouteCtrl,
    bindings: {
      // Inputs should use < and @ bindings.
      // Outputs should use & bindings.
    }
  });

  function mainRouteCtrl() {
    const ctrl = this;

    ctrl.$onInit = $onInit;

    function $onInit() {
      // Called on each controller after all the controllers have been constructed and had their bindings initialized
      // Use this for initialization code.
    }
  }

  // inject dependencies here
  mainRouteCtrl.$inject = [];
};
