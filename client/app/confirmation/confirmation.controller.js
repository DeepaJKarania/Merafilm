'use strict';

(function(){

class ConfirmationComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.t_id=[];
    this.time;
    this.movietitle;
    this.date;
    this.theatername;
    this.state;
    this.seat;
    this.price;
    this.ticketid;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });



  }



$onInit() {

  this.time=sessionStorage.getItem('time');
   this.movietitle=sessionStorage.getItem('movietitle');
   this.date=sessionStorage.getItem('date');
   this.theartername=sessionStorage.getItem('name');
   this.state=sessionStorage.getItem('state');
   this.seat=sessionStorage.getItem('seat');

   this.price=sessionStorage.getItem('totalbill');
console.log(this.price);

  this.$http.get('/api/omdbiendpoints/'+this.movietitle)
    .then(response => {
      this.awesomeThings = response.data;


      this.socket.syncUpdates('thing', this.awesomeThings);
    });

    this.$http.get('/api/payments/')
      .then(response => {
        this.t_id = response.data;
try{


    for(var i=0;i<=this.t_id.length;i++)
    {

      if(this.theartername==this.t_id[i].theater && this.seat==this.t_id[i].selectedseat && this.date==this.t_id[i].showdate && this.time[i]==this.t_id.Showtime)
      {

      this.ticketid=  this.t_id[i]._id;
	  console.log(ticketid);
	  document.write("seatjhj");
	  
      }
    }
}
catch(e)
{

}


        this.socket.syncUpdates('thing', this.awesomeThings);
      });

}}




angular.module('merafilmApp')
  .component('confirmation', {
    templateUrl: 'app/confirmation/confirmation.html',
    controller: ConfirmationComponent,
  //  controllerAs: Confirmation
  });

})();
