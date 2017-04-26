'use strict';

import mongoose from 'mongoose';
/*var cityschema=new mongoose.Schema
({
  c_name:String,
  address:String,
})*/

var TheatreSchema = new mongoose.Schema
({

  state:String,
  location:String ,
  seat:Number

/*countery:String,
state:[{
  s_name:String,
city:[{
//c_name:String,
//address:String,
cityschema,
}]

}],*/

/*  title:  String,
   writing: [{
         post: String,
         two: Number,
         three : Number,
         four  : String,
         five : [{  a: String,
                     b : String,
                     c  : String,
                     d: String,
                     e: { type: Date, default: Date.now },
                 }]
   }],*/



});

export default mongoose.model('Theatre', TheatreSchema);
