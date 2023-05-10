// Task 5:  Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// // [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// Answer:

// function divisibleBy(numbers, divisor){
//   let result = []
//     for (let i = 0; i < numbers.length; i++) {
//       if(numbers[i] % divisor == 0) {
//         result.push(numbers[i])
//       }
//     }
//       return result
// }

// Task 6:  Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
let array= [4,3,9,7,2,1] 

// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// Answer:
squareOrSquareRoot = (arr) => {let k= arr.map(el => Math.sqrt(el) % 1 ? el * el : Math.sqrt(el)) 
  return k}
console.log(squareOrSquareRoot(array));