'use strict';

import mongoose from 'mongoose';

var PaymentSchema = new mongoose.Schema({
  Movename:String,

  theater:String,
  showdate:String,
  Showtime:String,
  selectedseat:String,
  bill:[{

"ticketamount":Number,
"bookingfee":Number,
  "servicetax":Number,
  "swachhbharatcess":Number,
  "krishikalyancess":Number,

}],

state:String





});

export default mongoose.model('Payment', PaymentSchema);
