'use strict';

import mongoose from 'mongoose';

var InfoSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Info', InfoSchema);
