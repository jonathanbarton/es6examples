function sum() {
  var result = 0;
  for(var i=0;i<arguments.length;i++){
    result += arguments[i];
  }
  return result;
}

var values = [
  1,
  2,
  3,
  4
];

console.log(sum(1,2,3,4));
console.log(sum(...values));