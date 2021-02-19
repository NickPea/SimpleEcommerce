// event emitter

import EventEmitter from 'events';

const emitter = new EventEmitter();

emitter.setMaxListeners(999999999);

export default emitter;