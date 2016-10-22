module.exports = ngModule => {
  require('./tiffiny-route.component.css');

  ngModule.component('tiffinyRoute', {
    template: require('./tiffiny-route.component.html'),
    controller: tiffinyRouteCtrl,
    bindings: {
      // Inputs should use < and @ bindings.
      // Outputs should use & bindings.
    }
  });

  function tiffinyRouteCtrl() {
    const ctrl = this;

    ctrl.$onInit = $onInit;

    function $onInit() {
      // Called on each controller after all the controllers have been constructed and had their bindings initialized
      // Use this for initialization code.
    }
  }

  // inject dependencies here
  tiffinyRouteCtrl.$inject = [];
};
