'use strict';

(function(){

class PaymentComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.year=[];
this.movietitle;
this.time;
this.date;
this.theartername
this.state;
this.seat=[];
this.price;
this.v=0;
this.vat;
this.totalbill;
this.bookingfee=25;
this.s_tax=14;
this.sbharat=0.5;
this.krishi=0.5;
$scope.$on('$destroy', function() {
  socket.unsyncUpdates('thing');
});
  }

totalpayablebill()
{
if(this.v==0)
{
  this.v++
}
else
{

    this.v--;


}
}


 $onInit()
{

  var d=new Date();
  var y=d.getFullYear();

    for(var i=0;i<=10;i++)
  {
    var year=y+i;
    this.year.push(year);
  }


//session getting

  this.time=sessionStorage.getItem('time');
   this.movietitle=sessionStorage.getItem('movietitle');
   this.date=sessionStorage.getItem('date');
   this.theartername=sessionStorage.getItem('name');
   this.state=sessionStorage.getItem('state');
   this.seat.push(sessionStorage.getItem('seat'));
   this.price=sessionStorage.getItem('price');


   var t_bill=parseFloat(this.price);
   this.s_tax=parseFloat(t_bill*parseFloat(this.s_tax)/100);
   this.sbharat=parseFloat(t_bill*parseFloat(this.sbharat)/100);
   this.krishi=parseFloat(t_bill*parseFloat(this.krishi)/100);



 this.totalbill=parseFloat(t_bill+this.s_tax+this.sbharat+this.krishi);
 sessionStorage.setItem('totalbill',this.totalbill);


}

addthing()
{
  var number=this.number.toString();

  var cname=this.name;
  var cvv=this.cvv.toString();
  //var cvv=this.cvv.toString();

  if(number.length<16 )
  {
alert("Invalid card number");
  }
  else if( cname.length<3)
  {
    alert("Invalid Name on card");
  }
  else if( cvv.length!=3  )
  {
    alert("Invalid cvv number");
  }

  else
   {



        this.$http.post('/api/payments', {

          theater:this.theartername,
          showdate:this.date,
          Showtime:this.time,
          selectedseat:this.seat,
          bill:[{

        "ticketamount":this.price,
        "bookingfee":this.bookingfee,
          "servicetax":this.s_tax,
          "swachhbharatcess":this.sbharat,
          "krishikalyancess":this.krishi,

        }],

        state:this.state





        });

// alert("payment done successfully");

 window.location = "/confirmation";

}
}

}

angular.module('merafilmApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    //controllerAs: Payment
  });

})();
