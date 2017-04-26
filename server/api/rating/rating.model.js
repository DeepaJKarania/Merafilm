'use strict';

import mongoose from 'mongoose';

var RatingSchema = new mongoose.Schema({
  movie: String,
  rating:Number

});

export default mongoose.model('Rating', RatingSchema);
