function* idMaker(){
  var i = 0;
  while(true)
    yield i++;
}

var generator = idMaker();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
