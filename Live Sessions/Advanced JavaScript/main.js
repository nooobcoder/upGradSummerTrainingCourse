"use strict";

function xyz() {
	var var1 = 100;
	function abc() {
		var var1 = 20;
		console.log(this.var1);
		console.log(var1);
	}
	abc.call({ var1 });
}
xyz();
