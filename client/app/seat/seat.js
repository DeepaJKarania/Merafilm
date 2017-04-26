'use strict';

angular.module('merafilmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/seat', {
        template: '<seat></seat>'
      });
  });
