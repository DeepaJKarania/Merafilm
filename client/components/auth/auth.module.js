'use strict';

angular.module('merafilmApp.auth', ['merafilmApp.constants', 'merafilmApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
