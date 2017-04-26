'use strict';

import mongoose from 'mongoose';

var MoviesendpointSchema = new mongoose.Schema({
  name: String,
  description: String,
  time: String
});

export default mongoose.model('Moviesendpoint', MoviesendpointSchema);
