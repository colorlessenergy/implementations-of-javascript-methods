// implement Array.flat() by 1
// [1, [2, [3]]] [1, 2, [3]]

/**
  call this method on an array

  @variable {boolean} stepOnce - keep track if the array has already step into one layer

  loop through array
  check if the value is an array and `stepOnce` is false
    condition is true is step into the array
      and pass those values inside the new array
    else pass that value into a new array

  @param {Array} this - the array that wil be called on that has multiple array inside
  @return {Array} - new array that has 1 less array inside
*/



Array.prototype.flat = function () {
  // variable is used to keep track if the program is stepped into the array yet
  //  because we are trying to only remove one
  // array from the array that was callled o
  let stepOnce = false;
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    // using the METHOD Array.isArray to check if it exist
    // because typeof [] gives us a string of 'object'
    if (!stepOnce && Array.isArray(this[i])) {
      for (let j = 0; j < this[i].length; j++) {
        newArray.push(this[i][j]);
      }
      stepOnce = true;
    } else {
      newArray.push(this[i])
    }

  }
  return newArray;
}



let arr = [3, 4, [5, [10, 30]], 40];
let flatArray = arr.flat();

// [ 3, 4, 5, [ 10, 30 ], 40 ]
console.log(flatArray);
