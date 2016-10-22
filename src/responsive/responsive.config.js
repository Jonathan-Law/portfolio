module.exports = config;

function config($ngReduxProvider, $urlRouterProvider, $mdThemingProvider) {
  $ngReduxProvider.createStoreWith(require('../common/store/reducers'));
  $urlRouterProvider.otherwise('/main');
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('light-green', {
      'default': '400', // by default use shade 400 from the light green palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    .warnPalette('orange')
    .backgroundPalette('grey', {
      'default': '400', // by default use shade 400 from the light green palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    .dark();
}

config.$inject = ['$ngReduxProvider', '$urlRouterProvider', '$mdThemingProvider'];
