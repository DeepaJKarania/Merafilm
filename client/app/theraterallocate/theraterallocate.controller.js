'use strict';

(function(){

class TheraterallocateComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.find1=[];
    this.ther=[];
$scope.dates=[];
    this.omdbi=[];
    this.time=[];
    this.m=[];
    this.date=[];
    this.s=[];
    this.movie=[];
    this.newUniqueCountries = [];
    this.newUniquestate = [];
    this.newUniquecity = [];
    this.newUniqueaddress = [];

  //  this.show=0;
this.hide=0;
this.name1=[];
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }


  getseat()
  {
    var state=this.state;
    var city=this.city;

    this.$http.get('/api/theatres/'+state+'/'+city)
        .then(response => {

    this.s=response.data;

    this.socket.syncUpdates('thing', this.s);

        });
  }


$onInit()
{


     this.$http.get('/api/theraterallocates')
       .then(response => {
         this.movie=response.data;

this.socket.syncUpdates('thing', this.movie);


   });



}


deletesch(movies)
{
  this.$http.delete('/api/theraterallocates/' + movies._id);
//  location.reload();

this.socket.syncUpdates('thing', this.newUniquecity);
}

date1()

{



//var mm = someDate.getMonth() + 1;
//var y = omeDate.getFullYear();

//va someFormattedDate = dd + '/'+ mm + '/'+ y;

}


findcity()
{

var state=this.state;
console.log("hello"+state);
this.$http.get('/api/theatres/'+state)
    .then(response => {
    //  this.find1 =response.data;

      //country:this.find.country;
    console.log("Item found");


      var uniquecity = {};


    console.log(response.data);

      for(var i = 0; i< response.data.length; i++)
      {
//this.s=response.data[i].seat;
//console.log("seat"+s);
        if(uniquecity[(""+response.data[i].location).toLowerCase()] == undefined){
          // uniqueObj.push(data[i])
          uniquecity[(""+response.data[i].location).toLowerCase()] = (""+response.data[i].location);
        }
      }
      //


      var newUniquecity = [];

      for (var key in uniquecity) {
      if (uniquecity.hasOwnProperty(key)) {
        // console.log(uniqueCountries[key]);
        newUniquecity.push( uniquecity[key] );
      }
      }

      this.newUniquecity = newUniquecity;

console.log(this.newUniquecity);



      //------


    });

this.socket.syncUpdates('thing', this.newUniquecity);

}


updatething(data)
{

  this.$http.get('/api/theraterallocates')
    .then(response => {
      response.data;

      var flag=false;


      for(var i=0;i<=response.data.length;i++)
      {
     console.log(response.data);
     try{
      if( response.data[i].state==data.state && response.data[i].location==data.location && response.data[i].date==data.date && response.data[i].start_time==data.start_time) //&& this.movie.state==this.state && this.movie.location== this.city && this.movie.start_time==this.time && this.movie.date==this.date  )
      {

        flag=true;

      }
    }catch(e){}

        }
        if(data.date==undefined)
        {
          alert("date not valid , enter the date in 'DD/MM/YYYY' formate ");
          }

      ///////////////
      if(flag)
      {
      alert("Theater allready booked");

      }
      else {
    this.$http.put('/api/theraterallocates/'+data._id ,JSON.stringify(data));
      location.reload();

      }



//this.socket.syncUpdates('thing', this.movie);


});

  //try



}
//catch(e){}


//  this.socket.syncUpdates('thing', this.date);
  //}




edit($index)
{
this.show=$index;
  console.log("dd");



}
  finditem()
  {

  //
  var name1=this.title;
   //var t=title.charAt(0).toUpperCase();
   //title.replaceAt(0,"t");

   String.prototype.capitalize = function() {
       return this.charAt(0).toUpperCase() +this.slice(1);
   };


   //console.log("hello"+title.capitalize() );
  this.$http.get('/api/omdbiendpoints/'+name1.capitalize())
    .then(response => {
//data send to html page

      this.find1 =response.data;
      //country:this.find.country;
    console.log(response.data);

    //this.date=response.data;
    console.log(this.date);
  });




        this.$http.get('/api/theatres')
            .then(response => {
              this.ther =response.data;


    //--- starting of unique state


    var uniquestate = {};


    console.log(response.data);

    for(var i = 0; i< response.data.length; i++)
    {

    if(uniquestate[(""+response.data[i].state).toLowerCase()] == undefined){
      // uniqueObj.push(data[i])
      uniquestate[(""+response.data[i].state).toLowerCase()] = (""+response.data[i].state);
    }
    }
    //
    console.log(uniquestate);

    var newUniquestate = [];

    for (var key in uniquestate) {
    if (uniquestate.hasOwnProperty(key)) {
    // console.log(uniqueCountries[key]);
    newUniquestate.push( uniquestate[key] );
    }
    }

    this.newUniquestate = newUniquestate;
    //-- End of state code.

    });

    //don't know what is the use of bellow line
this.socket.syncUpdates('thing', this.newUniquestate);

    //}


    }
  //-----

//   time1()
//   {
//     var t =this.find1[0].duration;
//
//     var t2=t.replace('min','');
//     var t7=Math.floor(t2/60);
//     var t8=t2%60*1;
//     var time="23:10";
//     var time1=time.split(':')
//
//   t7=(t7+parseInt(time1[0]));
//   t8=(t8+parseInt(time1[1]));
//   if(t8>59)
//   {
//
//   var t81=Math.floor(t8/60);
//   var tt=t8 % 60*1;
//   //console.log("value  of t8"+ t8);
//
//   t7=t7+t81;
//   //tt=t8+tt;
//   console.log(t7 +"  "+tt);
// }
// else {
//   //console.log(new Date().toString("hh:mm tt"))
//   var d = new Date();
//    d.setHours(t7);
//    d.setMinutes(t8);
//     console.log((d.getHours()+':'+d.getMinutes())+' '+(d.getHours()<12? 'AM':'PM')+);
// }
// //var t4=t3.split(".")
//
//
//   //  console.log(t7+"  "+ t8);
//   }




   abc() {


console.log("ddd");

    var someDate = new Date();

    for(var i=1;i<=5;i++){
    someDate.setDate(someDate.getDate() + 1);
     this.dates=someDate.getDate();

    //response.date;
console.log(this.dates);




}

//
// this.$http.post('/api/theraterallocates',this.date)
//     .then(response => {
//       $scope.date=this.date;
// console.log(date);
// });
}
//   getdata()
//   {
//     var check=this.t;
//     if(check==null)
//     {
//       //alert("please file the Textbox");
//     }
//     else {
//
//     this.$http.get('http://www.omdbapi.com/?t='+this.t+'&y='+this.y)
//       .then(response => {
//
//         this.omdbi =response.data;
//
//
//         if(this.omdbi.Poster==null)
//         {
//   alert("no data found")
//
//         }
//
//
//         this.socket.syncUpdates('thing', this.omdbi);
//
//       });
// }
//
//
// }

  addThing() {

console.log("thie date"+this.date1);
var a=document.getElementById('date').value;

var flag;

for(var i=0;i<this.movie.length;i++)
{
if( this.movie[i].state==this.state && this.movie[i].location==this.city && this.movie[i].date==a && this.movie[i].start_time==this.time) //&& this.movie.state==this.state && this.movie.location== this.city && this.movie.start_time==this.time && this.movie.date==this.date  )
{
  flag=true;
  //alert("Therater allready book");
}}




if(flag)
{
  alert("Therater allready booked");
}
else{
    this.$http.post('/api/theraterallocates', {
      m_id:document.getElementById('mid').value,
      state:this.state,
      location:this.city,
       start_time:this.time,
      date:document.getElementById('date').value,
       seat:document.getElementById('seat').value


    });
      alert("data inserted");
}


  }}







angular.module('merafilmApp')
  .component('theraterallocate', {
    templateUrl: 'app/theraterallocate/theraterallocate.html',
    controller: TheraterallocateComponent,
  // controllerAs: Theraterallocate
  });

})();
