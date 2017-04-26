'use strict';

(function(){

class OmdbiComponent {
  constructor($http, $scope, $timeout, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.find=[];
    this.ther=[];
    this.sort=[];
    this.omdbi=[];
    this.newUniqueCountries = [];
    this.newUniquestate = [];
    this.newUniquecity = [];
    this.newUniqueaddress = [];



    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }



finditem()
{


var state=this.state;
console.log("hello"+state);
this.$http.get('/api/theatres/'+state)
    .then(response => {
      this.find =response.data;
      //country:this.find.country;
    console.log("Item found"+   response.data.location);


      var uniquecity = {};




      for(var i = 0; i< response.data.length; i++)
      {

        if(uniquecity[(""+response.data[i].location).toLowerCase()] == undefined){
          // uniqueObj.push(data[i])
          uniquecity[(""+response.data[i].location).toLowerCase()] = (""+response.data[i].location);
        }
      }
      //


      var newUniquecity = [];

      for (var key in uniquecity) {
      if (uniquecity.hasOwnProperty(key)) {

        newUniquecity.push( uniquecity[key] );
      }
      }

      this.newUniquecity = newUniquecity;

console.log(this.newUniquecity);


      this.socket.syncUpdates('thing', this.newUniquecity);
      //------


    });

}
//-----




 $onInit() {

    this.$http.get('/api/omdbiendpoints')
      .then(response => {
        this.awesomeThings =response.data;


        this.socket.syncUpdates('thing', this.awesomeThings);
        //------


      });



      this.$http.get('/api/theatres')
          .then(response => {
            this.ther =response.data;

          //console.log(this.ther.);

        //     var uniqueCountries = {};
         //
         //
         //
         //
        //   for(var i = 0; i< response.data.length; i++)
        //   {
        //       if(uniqueCountries[(""+response.data[i].country).toLowerCase()] == undefined){
        //         // uniqueObj.push(data[i])
        //         uniqueCountries[(""+response.data[i].country).toLowerCase()] = (""+response.data[i].country);
        //       }
        //   }
        //   //
        //  //console.log(uniqueCountries);
         //
        //   var newUniqueCountries = [];
         //
        //    for (var key in uniqueCountries) {
        //    if (uniqueCountries.hasOwnProperty(key)) {
        //       // console.log(uniqueCountries[key]);
        //       newUniqueCountries.push( uniqueCountries[key] );
        //    }
        //  }
         //
        //  this.newUniqueCountries = newUniqueCountries;
         //End of country code
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
//--start of city code

// var uniquecity = {};
//
//
// console.log(response.data);
//
// for(var i = 0; i< response.data.length; i++)
// {
//
//   if(uniquecity[(""+response.data[i].location).toLowerCase()] == undefined){
//     // uniqueObj.push(data[i])
//     uniquecity[(""+response.data[i].location).toLowerCase()] = (""+response.data[i].location);
//   }
// }
// //
// console.log(uniquecity);
//
// var newUniquecity = [];
//
// for (var key in uniquecity) {
// if (uniquecity.hasOwnProperty(key)) {
//   // console.log(uniqueCountries[key]);
//   newUniquecity.push(uniquecity[key] );
// }
// }
//
// this.newUniquecity = newUniquecity;
//--end of city
//starting of address


var uniqueaddress = {};


console.log(response.data);

for(var i = 0; i< response.data.length; i++)
{

  if(uniqueaddress[(""+response.data[i].address).toLowerCase()] == undefined){
    // uniqueObj.push(data[i])
    uniqueaddress[(""+response.data[i].address).toLowerCase()] = (""+response.data[i].address);
  }
}
//
console.log(uniqueaddress);

var newUniqueaddress = [];

for (var key in uniqueaddress) {
if (uniqueaddress.hasOwnProperty(key)) {
  // console.log(uniqueCountries[key]);
  newUniqueaddress.push(uniqueaddress[key] );
}
}

this.newUniqueaddress = newUniqueaddress;







            this.socket.syncUpdates('thing', this.awesomeThings);
});
  }


  deleteMovie(movies)
  {

  var moviename=[];



    console.log(movies.title);
    this.$http.get('/api/theraterallocates')
      .then(response => {
    moviename =response.data;

var flag=0;


for(var i=0;i<moviename.length;i++)
{
console.log(moviename[i].m_id);

if(movies.title== moviename[i].m_id )
{

flag=1;



}



}

 if(flag==1)

 {
alert(" Movie is schulede in some theaters , so it can't be delete from this page.");
}
else {
 this.$http.delete('/api/omdbiendpoints/' + movies._id);
 // this.$http.delete('/api/ratings/'+movies.title);
}




  });

      // location.reload();

  }



  getdata(){
    var check=this.t;
    if(check==null)
    {
      //alert("please file the Textbox");
    }
    else {

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

  }


  addThing() {
    try{

      this.$http.post('/api/omdbiendpoints', {
        poster: this.omdbi.Poster,
        title:this.omdbi.Title,
        year:this.omdbi.Year,
        genere:this.omdbi.Genre,
          starcast:this.omdbi.Actors,
          director:this.omdbi.Director,
          language:this.omdbi.Language,
          duration:this.omdbi.Runtime,
          plot:this.omdbi.Plot,
          imdbID:this.omdbi.imdbID

      });

}
catch(e)
{
  console.log(e);
}
   //location.reload();
      this.newThing = '';
    }}




angular.module('merafilmApp')
  .component('omdbi', {
    templateUrl: 'app/omdbi/omdbi.html',
    controller: OmdbiComponent,
  //  controllerAs: theatre
  });

})();
