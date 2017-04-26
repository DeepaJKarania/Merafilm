'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.movie=[];
    // $scope.$on('$destroy', function() {
    // socket.unsyncUpdates('thing');
    // });
  }

click1(movie)
{

sessionStorage.setItem('movietitle', movie.title);
 window.location = "/info";

}

  $onInit()
  {

    this.$http.get('/api/theraterallocates')
        .then(response => {
          var uniquemovie = {};


          for(var i = 0; i<= response.data.length; i++)
          {
            try
            {
              if(uniquemovie[(""+response.data[i].m_id).toLowerCase()] == undefined)
              {
                uniquemovie[(""+response.data[i].m_id).toLowerCase()] = (""+response.data[i].m_id);
              }
              var newUniquemovie = [];

              for (var key in uniquemovie)
              {


                if (uniquemovie.hasOwnProperty(key))
                {

                  newUniquemovie.push(uniquemovie[key] );


                }
              }

              this.movie=newUniquemovie;

            }
            catch(e)
            {}
          }

          for(var j=0;j<this.movie.length;j++)
          {
            this.$http.get('/api/omdbiendpoints/'+this.movie[j])
            .then(response => {
              this.awesomeThings.push(response.data[0]);
            });
          }
  });








//this.socket.syncUpdates('thing', this.awesomeThings);

  }

//   addThing() {
//     if (this.newThing) {
//       this.$http.post('/api/things', {
//         name: this.newThing
//       });
//       this.newThing = '';
//     }
//   }
//
//   deleteThing(thing) {
//     this.$http.delete('/api/things/' + thing._id);
//   }
 }

angular.module('merafilmApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });
})();
