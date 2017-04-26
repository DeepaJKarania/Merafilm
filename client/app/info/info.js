  'use strict';
  
  angular.module('merafilmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/info', {
        template: '<info></info>'
      });
  });
