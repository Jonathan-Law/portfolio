import { attachAll } from '../../../../other/boilerplate-utils.js';

const ngModule = angular.module('da.responsive.main', []);

attachAll(require.context('./components', true, /\.(component|directive)\.js$/))(ngModule);
attachAll(require.context('./containers', true, /\.(component|directive)\.js$/))(ngModule);

ngModule.config(mainConfig);


function mainConfig($stateProvider) {
  $stateProvider.state('main', {
    url: '/main',
    template: '<main-route></main-route>'
  });
}

mainConfig.$inject = ['$stateProvider'];


export default ngModule;
