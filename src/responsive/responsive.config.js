module.exports = config;

function config($ngReduxProvider, $urlRouterProvider, $mdThemingProvider) {
  $ngReduxProvider.createStoreWith(require('../common/store/reducers'));
  $urlRouterProvider.otherwise('/main');
  $mdThemingProvider.theme('main')
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

  /*KATHRINE'S THEME*/
  $mdThemingProvider.theme('kathrine')
  .primaryPalette('purple', {
    'default': '800', // by default use shade 400 from the light green palette for primary intentions
    'hue-1': '600', // use shade 100 for the <code>md-hue-1</code> class
    'hue-2': '800', // use shade 600 for the <code>md-hue-2</code> class
    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  })
  .accentPalette('cyan', {
    'default': '600', // by default use shade 400 from the light green palette for primary intentions
    'hue-1': '200', // use shade 100 for the <code>md-hue-1</code> class
    'hue-2': '800', // use shade 600 for the <code>md-hue-2</code> class
    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  })
  .warnPalette('red', {
    'default': '300', // by default use shade 400 from the light green palette for primary intentions
    'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
    'hue-2': '500', // use shade 600 for the <code>md-hue-2</code> class
    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  })
  .backgroundPalette('grey', {
    'default': '400', // by default use shade 400 from the light green palette for primary intentions
    'hue-1': '200', // use shade 100 for the <code>md-hue-1</code> class
    'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  });

  /*TIFFINY'S THEME*/
  $mdThemingProvider.theme('tiffiny')
  .primaryPalette('light-blue', {
    'default': '400', // by default use shade 400 from the light green palette for primary intentions
    'hue-1': '200', // use shade 100 for the <code>md-hue-1</code> class
    'hue-2': '900', // use shade 600 for the <code>md-hue-2</code> class
    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  })
  .accentPalette('amber', {
    'default': '200', // by default use shade 400 from the light green palette for primary intentions
    'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
    'hue-2': '500', // use shade 600 for the <code>md-hue-2</code> class
    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  })
  .warnPalette('deep-orange', {
    'default': '700', // by default use shade 400 from the light green palette for primary intentions
    'hue-1': '400', // use shade 100 for the <code>md-hue-1</code> class
    'hue-2': '900', // use shade 600 for the <code>md-hue-2</code> class
    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  })
  .backgroundPalette('grey')
  .dark();

  // $mdThemingProvider.setDefaultTheme('main');
  $mdThemingProvider.alwaysWatchTheme(true);
}

config.$inject = ['$ngReduxProvider', '$urlRouterProvider', '$mdThemingProvider'];
