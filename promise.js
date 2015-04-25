var p1 = new Promise(function(resolve, reject) {
	window.setTimeout(function(){
		resolve('FOO');
	}, Math.random()*2000);
});

p1.then(function(val){
	console.log("Resolved Promise value: ", val);
});