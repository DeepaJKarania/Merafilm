'use strict';

import mongoose from 'mongoose';

var OmdbiendpointSchema = new mongoose.Schema({
  poster:String,
  title:String,
  year:String,
  genere:String,
  starcast: String,
  director:String,
  language: String,
  duration: String,
  plot:String,
    imdbID:String








});

export default mongoose.model('Omdbiendpoint', OmdbiendpointSchema);
