'use strict';

angular.module('merafilmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/theraterallocate', {
        template: '<theraterallocate></theraterallocate>'
      });
  });
