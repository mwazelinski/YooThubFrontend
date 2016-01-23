(function () {
    'use strict';

    angular
        .module('yoothub')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider) {
        $stateProvider
            .state(browse);
    }

    var browse = {
        name: 'browse',
        url: '/browse',
        templateUrl: 'app/browseSongs/browseSongs.html',
        controller: 'BrowseSongsController',
        controllerAs: 'vm'
    }

})();
