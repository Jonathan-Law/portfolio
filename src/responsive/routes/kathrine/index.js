import { attachAll } from '../../../../other/boilerplate-utils.js';

const ngModule = angular.module('da.responsive.kathrine', []);

attachAll(require.context('./components', true, /\.(component|directive)\.js$/))(ngModule);
attachAll(require.context('./containers', true, /\.(component|directive)\.js$/))(ngModule);

ngModule.config(kathrineConfig);


function kathrineConfig($stateProvider) {
  $stateProvider.state('kathrine', {
    url: '/kathrine',
    template: '<kathrine-route></kathrine-route>'
  });
}

kathrineConfig.$inject = ['$stateProvider'];


export default ngModule;
