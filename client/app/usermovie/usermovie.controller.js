'use strict';

(function(){

class UsermovieComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('moviesendpoint');
    });
  }

  $onInit() {
    this.$http.get('/api/moviesendpoints ')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('moviesendpoint', this.awesomeThings);
      });
  }
}

angular.module('merafilmApp')
  .component('usermovie', {
    templateUrl: 'app/usermovie/usermovie.html',
    controller: UsermovieComponent
  });

})();
