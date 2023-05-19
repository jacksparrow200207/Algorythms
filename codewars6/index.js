// Task 13: Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)

// Answer

function generateRange(min, max, step){
  let result = [min]
  for(let i = 1; i < max; i++ ) {
    if(min < max) {
      let lastInt =  min += step
      if(lastInt <= max) {
        result.push(lastInt)
      }
    }
  }  
  return result
}

console.log(generateRange(1, 10, 2))

// Task 14: Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */ 

// Answer

function toBinary(n){
  return parseInt(n.toString(2));
}