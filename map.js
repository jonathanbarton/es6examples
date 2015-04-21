var map = new Map();
map.set(0, "foo");
map.set(1, "bar");
map.set(2, "baz");
map.set("three", 0xBAF);

for (var key of map.keys()) {
	console.log("key: ", key);
}

for (var [key, val] of map.entries()) {
	console.log("key, val:", key, ", ", val);
}