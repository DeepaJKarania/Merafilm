'use strict';

angular.module('merafilmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/usermovie', {
        template: '<usermovie></usermovie>'
      });
  });
