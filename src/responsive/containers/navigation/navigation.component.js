module.exports = ngModule => {
  require('./navigation.component.css');

  ngModule.component('navigation', {
    template: require('./navigation.component.html'),
    controller: navigationCtrl,
    bindings: {
      // Inputs should use < and @ bindings.
      // Outputs should use & bindings.
    }
  });

  function navigationCtrl($state, $scope, $rootScope) {
    const ctrl = this;

    ctrl.$onInit = $onInit;
    ctrl.getBackground = getBackground;
    function $onInit() {
      // Called on each controller after all the controllers have been constructed and had their bindings initialized
      // Use this for initialization code.
    }

    function getBackground() {
      return `${ctrl.dynamicTheme || 'main'}-warn-900`;
    }
    $scope.$on('$stateChangeSuccess', (event, toState/*, toParams, fromState, fromParams*/) => {
      // toState === $state.current
      ctrl.currentNavItem = toState.name;
    });
    $rootScope.$watch('dynamicTheme', (newval/*, toParams, fromState, fromParams*/) => {
      ctrl.dynamicTheme = newval;
    });
  }

  // inject dependencies here
  navigationCtrl.$inject = ['$state', '$scope', '$rootScope'];
};
