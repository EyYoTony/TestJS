const { isNil } = require('ramda')

function add3params(x,y=100,z=5){
  return x+y+z
}

function anotherDefault(x, y){
  y = isNil(y) ? 5 : y
  return x+y
}

console.log(add3params(1))
console.log(add3params(1,2))
console.log(add3params(1,2,3))

console.log(anotherDefault(1))
console.log(anotherDefault(1,2))
