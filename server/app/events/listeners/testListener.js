// test listener

import emitter from "../emitter/index.js";

emitter.addListener("test", test);

function test() {
	console.log("events test working");
}

// emitter.emit("test");
