'use strict';

angular.module('merafilmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/omdbi', {
        template: '<omdbi></omdbi>'
      });
  });
