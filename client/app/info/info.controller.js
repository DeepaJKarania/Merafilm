'use strict';

(function(){

class InfoComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.newUniquestate=[];
    this.city=[];
    this.date=[];
    this.time=[];
    this.location1=[];
    this.name=[];
    this.state={};
    this.totaltime={};
    this.trailer={};
    this.seat;
    this.rate=0;
this.d=0;
this.t=0;
this.tl=0;
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }




rate1(r)
{

var m_name=sessionStorage.getItem('movietitle');
  this.$http.post('/api/ratings ', {

    movie: m_name,
    rating:r

  });


}



seatselect(name)
{

for(var a=0;a<this.city.length;a++)
{


if(this.city[a].location==name)
{
    this.seat=this.city[a].seat;
}


}
sessionStorage.setItem('seat', this.seat);
  sessionStorage.setItem('name', name);
  //console.log(name)
  window.location = "/seat";
}



// vi()
// {
//   var a=this.awesomeThings.title;
//   console.log(a);
//
//   this.$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=PK&key=AIzaSyBda0gaY5pCnTsRz7rHNaDdRxQl-uIB03E')
//     .then(response => {
//
//       console.log(response.data.items[0].id.videoId);
//
// });
//
//
// }



  gettlocation(time)
  {
sessionStorage.setItem('time', time);

    var uniquename={};
    for(var i=0;i<=this.city.length;i++)
    {

     var a=this.city[i].start_time;

        var c=this.city[i].state;



      if(time==a && this.state==c)
      {

        uniquename[this.city[i].location]=this.city[i].location;

        var uname=[];


        for (var key in uniquename) {
        if (uniquename.hasOwnProperty(key)) {

        uname.push( uniquename[key] );

        }
        }

        this.name = uname;
        this.tl=1;

      }


  }


  }




gettime(date1)
{
sessionStorage.setItem('date', date1);

  var uniquetime={};
  try{
  for(var i=0;i<=this.city.length;i++)
  {
var a=this.city[i].date;
var b=this.city[i].state;


    if(date1==a && this.state==b)
    {

      uniquetime[this.city[i].start_time]=this.city[i].start_time;

      var utime=[];


      for (var key in uniquetime) {
      if (uniquetime.hasOwnProperty(key)) {

      utime.push( uniquetime[key] );

      }
      }

      this.time = utime;



this.t=1;



    }


}

}
catch(e){ }


this.selecttime=[];
console.log("wwww");
var time=new Date();
var hh=time.getHours();
var mm=time.getMinutes();
for(var i=0;i<this.time.length;i++)
{
  try{
  var t=this.time[i];
  t=t.split(":");
//will show you the showtime which is greater than or equals to the system time(hours)
  if(t[0]>=hh)
   {

     this.selecttime.push(this.time[i]);

   }
}

catch(e)
{}

}


}


getdate(state)
{
  try {


sessionStorage.setItem('state', state);
this.state=state;

var uniquedate={};
for(var i=0;i<=this.city.length;i++)
{
   var a=this.city[i].state;
   console.log("state name"+a);
  if(state==a)
  {

    uniquedate[this.city[i].date]=this.city[i].date;

    var udate=[];


    for (var key in uniquedate) {
    if (uniquedate.hasOwnProperty(key)) {
    // console.log("ggh"+uniquedate[key]);
    udate.push( uniquedate[key] );

    }
    }

     this.date = udate;

    //console.log("date"+this.date);
    //geting the date


    this.d=1;

  }




}
}
catch (e) {

}
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd
}
if(mm<10){
    mm='0'+mm
}
//var today =dd+'/'+mm+'/'+yyyy;
//today=Date.parse(today);



this.select_date=[];


for(var i=0;i<=this.date.length;i++)
{


try{
  var a=this.date[i];
  //ddd is a var that hold the data ater split
  var ddd=a.split('/');
console.log("ddd"+ddd);

if(ddd[0]>=dd || ddd[1]>=mm || ddd[2]>=yyyy)
{

  this.select_date.push(this.date[i]);

}
}
catch(e)
{}
}




}


$onInit()
{

  var b=sessionStorage.getItem('movietitle');


  this.$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+b+'trailer'+'&key=AIzaSyBda0gaY5pCnTsRz7rHNaDdRxQl-uIB03E')
    .then(response => {


var trailer_id=response.data.items[0].id.videoId;

var trailer="https://www.youtube.com/embed/"+trailer_id;


document.getElementById('player').setAttribute("src",trailer);


});



this.$http.get('/api/ratings/'+b)
  .then(response => {

    var count=0;
    var i;

     try{

for(i=0;i<=response.data.length;i++)
{

  count+=response.data[i].rating;

}
//

}
 catch(e)
 {}
 if(count>0)
 {
this.rate=Math.round(count*100/(i*5));
}


});






      this.$http.get('/api/omdbiendpoints/'+b)
        .then(response => {

          this.awesomeThings =response.data;

//convert min into hour.

              var t =this.awesomeThings[0].duration;

              var time=t.replace('min','');
              var t_hr=Math.floor(time/60);
              var t_min=time%60*1;

//convert if t_min(minuit) is greater then 59
            if(t_min>59)
            {

            var tmh=Math.floor(t_min/60);
            var tmm=t_min % 60*1;

            this.totaltime=tmh+" "+"hr"+" "+tmm+" "+"min";


          }
          else {
            this.totaltime=t_hr+" "+"hr"+" "+t_min+" "+"min";

          }

          this.socket.syncUpdates('thing', this.awesomeThings);


        });


//fetch thearter record



this.$http.get('/api/theraterallocates/'+b )
  .then(response => {

        this.city =response.data;



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


        var newUniquestate = [];

        for (var key in uniquestate) {
        if (uniquestate.hasOwnProperty(key)) {

        newUniquestate.push( uniquestate[key] );
        }
        }

        this.newUniquestate = newUniquestate;
//console.log(this.newUniquestate);







  });





this.socket.syncUpdates('city', this.newUniquestate);

}
}




angular.module('merafilmApp')
  .component('info', {
    templateUrl: 'app/info/info.html',
    controller: InfoComponent,
  //  controllerAs: Info
  });

})();
