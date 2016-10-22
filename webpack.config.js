// Include dependencies
require('babel-register');
const getConfig = require('./other/webpack.config.es6');

/**
 * Configure your webpack setup here. These settings can be changed at any time.
 *
 * Read more on the wiki:
 * https://github.com/DomoApps/starter-kit/wiki/Webpack-Configuration
 */
module.exports = getConfig({
  includeDesktopView: false,
  includeResponsiveView: true,
  externals: {
    // Include your app's extra externals here
    'angular-material': {
      root: 'angular-material',
      commonjs: 'angular-material',
      commonjs2: 'angular-material',
      amd: 'angular-material'
    },
    'angular-aria': {
      root: 'angular-aria',
      commonjs: 'angular-aria',
      commonjs2: 'angular-aria',
      amd: 'angular-aria'
    }
  },
  loaders: [
    // Include your app's extra loaders here
  ]
});
