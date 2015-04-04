var foo = "bar";

var baseObj = {
	foo
};

var obj = {
	__proto__: baseObj,
	["ba" + foo]: "elephant"
 }

 console.log(obj.foo);
 console.log(obj.babar);
