module.exports = ngModule => {
  require('./kathrine-route.component.css');

  ngModule.component('kathrineRoute', {
    template: require('./kathrine-route.component.html'),
    controller: kathrineRouteCtrl,
    bindings: {
      // Inputs should use < and @ bindings.
      // Outputs should use & bindings.
    }
  });

  function kathrineRouteCtrl() {
    const ctrl = this;

    ctrl.$onInit = $onInit;

    function $onInit() {
      // Called on each controller after all the controllers have been constructed and had their bindings initialized
      // Use this for initialization code.
    }
  }

  // inject dependencies here
  kathrineRouteCtrl.$inject = [];
};
