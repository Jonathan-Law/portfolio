import { attachAll } from '../../../../other/boilerplate-utils.js';

const ngModule = angular.module('da.responsive.tiffiny', []);

attachAll(require.context('./components', true, /\.(component|directive)\.js$/))(ngModule);
attachAll(require.context('./containers', true, /\.(component|directive)\.js$/))(ngModule);

ngModule.config(tiffinyConfig);


function tiffinyConfig($stateProvider) {
  $stateProvider.state('tiffiny', {
    url: '/tiffiny',
    template: '<tiffiny-route></tiffiny-route>'
  });
}

tiffinyConfig.$inject = ['$stateProvider'];


export default ngModule;
