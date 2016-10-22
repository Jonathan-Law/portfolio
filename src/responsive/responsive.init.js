module.exports = init;

function init($rootScope) {
	// Add any app initialization code here.
  $rootScope.$on('$stateChangeSuccess', (event, toState /*, toParams, fromState, fromParams*/) => {
    // toState === $state.current
    if (toState.name === 'main') {
      $rootScope.title = 'JonLaw.us';
    } else if (toState.name === 'tiffiny') {
      $rootScope.title = 'Tiffiny Law';
    } else {
      $rootScope.title = 'jonlaw.us — ' + toState.name.charAt(0).toUpperCase() + toState.name.slice(1);
    }
    $rootScope.getBackground = () => {
      return `${$rootScope.dynamicTheme || 'main'}-background`;
    };
    $rootScope.dynamicTheme = toState.name;
    $rootScope.getTheme = () => {
      return `${$rootScope.dynamicTheme || 'main'}`;
    };
    // $rootScope.title = toState.name;
  });
}

init.$inject = ['$rootScope'];
