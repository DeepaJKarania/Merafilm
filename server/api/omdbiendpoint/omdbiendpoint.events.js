/**
 * Omdbiendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Omdbiendpoint from './omdbiendpoint.model';
var OmdbiendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OmdbiendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Omdbiendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    OmdbiendpointEvents.emit(event + ':' + doc._id, doc);
    OmdbiendpointEvents.emit(event, doc);
  }
}

export default OmdbiendpointEvents;
