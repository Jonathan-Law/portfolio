module.exports = init;

function init($rootScope) {
	// Add any app initialization code here.
  $rootScope.$on('$stateChangeSuccess', (event, toState /*, toParams, fromState, fromParams*/) => {
    // toState === $state.current
    if (toState.name === 'main') {
      $rootScope.title = 'JonLaw.us';
    } else if (toState.name === 'tiffiny') {
      $rootScope.title = 'Tiffiny Law';
    }
    // $rootScope.title = toState.name;
  });
}

init.$inject = ['$rootScope'];
