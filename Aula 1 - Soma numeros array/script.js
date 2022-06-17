let array = new Array(1, 2, 4, 8)
console.log(array)

let total = 0;
for( i = 0; i < array.length; i++ ) {
  total += array[ i ]
  console.log(total)
}

let somaTotalArray = array.reduce((acc, actual) => acc + actual);
console.log(somaTotalArray);