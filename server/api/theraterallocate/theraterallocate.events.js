/**
 * Theraterallocate model events
 */

'use strict';

import {EventEmitter} from 'events';
import Theraterallocate from './theraterallocate.model';
var TheraterallocateEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TheraterallocateEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Theraterallocate.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TheraterallocateEvents.emit(event + ':' + doc._id, doc);
    TheraterallocateEvents.emit(event, doc);
  }
}

export default TheraterallocateEvents;
