'use strict';

import mongoose from 'mongoose';

var TheraterallocateSchema = new mongoose.Schema({
  m_id: String,
  state: String,
  location: String,
  start_time:String,
  date:String,
  seat:Number
});



export default mongoose.model('Theraterallocate', TheraterallocateSchema);
