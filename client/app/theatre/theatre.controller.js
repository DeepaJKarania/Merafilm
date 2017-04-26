'use strict';

(function(){

class TheatreComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.omdbi=[];


    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }


 $onInit() {
    this.$http.get('/api/theatres')
      .then(response => {
        this.awesomeThings =response.data;

//this.awesomeThings=JSON.stringify(this.awesomeThings));

     //window.alert(JSON.stringify(this.awesomeThings));
        this.socket.syncUpdates('thing', this.awesomeThings);

      });
  }

updatetheater(theater)
{

  var theatername=[];
    //console.log(movies.title);
    this.$http.get('/api/theraterallocates')
      .then(response => {
    theatername =response.data;
    var flag=0;
    console.log(theatername)
  for(var i=0;i<theatername.length;i++)
  {
  if(theater.state== theatername[i].state && theater.location == theatername[i].location )
  {
    flag=1;
  }
  }
  if(flag==1)
  {
  alert(" Theater is allready book for the movie , so it can't be Update from this page.");
  }
  else {


    if(theater.seat==80 || theater.seat==100 ||theater.seat==130 )
    {


      this.$http.put( '/api/theatres/'+theater._id ,JSON.stringify(theater));



      }
      else {
      alert('wrong seat entry please enter 80 or 100 0r 130 ');
      }

  }

  });






///////

}

deletetheater(theater)
{
  var theatername=[];
    //console.log(movies.title);
    this.$http.get('/api/theraterallocates')
      .then(response => {
    theatername =response.data;
    var flag=0;
    console.log(theatername)
  for(var i=0;i<theatername.length;i++)
  {
  if(theater.state== theatername[i].state && theater.location == theatername[i].location )
  {
    flag=1;
  }
  }
  if(flag==1)
  {
  alert(" Theater is allready book for the movie , so it can't be delete from this page.");
  }
  else {
this.$http.delete('/api/theatres/' + theater._id);
  }

});

}



  getdata(){


    this.$http.get('http://www.omdbapi.com/?t='+this.t+'&y='+this.y)
      .then(response => {

        this.omdbi =response.data;


        if(this.omdbi.Poster==null)
        {
alert("no data found")

        }


        this.socket.syncUpdates('thing', this.omdbi);

      });
      }




  addThing() {

      this.$http.post('/api/theatres', {

        state:this.state,
        location:this.location1,
        seat:this.seat




      });
window.alert("data inserted");
this.state="";
this.location1="";
this.seat="";
      this.newThing = '';
    }
}





angular.module('merafilmApp')
  .component('theatre', {
    templateUrl: 'app/theatre/theatre.html',
    controller: TheatreComponent,
  //  controllerAs: Omdbi
  });

})();
