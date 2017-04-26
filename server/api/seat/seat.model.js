'use strict';

import mongoose from 'mongoose';

var SeatSchema = new mongoose.Schema({
  name: String,
        location: String,
        address: String,
        screen: String,
        slot: String,
        seats: String,
        seatPlan: {
            "name" : String,
            "price" : String,
            "count" : String,
            "rows" : [ {"rn" : String,"s" : [ String ] } ]
        }
});

export default mongoose.model('Seat', SeatSchema);
