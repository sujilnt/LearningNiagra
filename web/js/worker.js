"use strict";

var curFib = 0;


self.onmessage=getNextFib;

// TODO
console.log(self, "What is self");
// **********************************
function getNextFib(){
	var fibNum= fib(curFib);
	self.postMessage({
		fib:fibNum, idx: curFib
	});
	curFib= curFib+1;
	setTimeout(getNextFib,0);
}

function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n-1) + fib(n-2);
}
