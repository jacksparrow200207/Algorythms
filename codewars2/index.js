// Task 7: Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// function expressionMatter(a, b, c) {
//   let result = []
//   result[0] = a * (b + c)
//   result[1] = a * b * c
//   result[2] = a + b * c
//   result[3] = (a + b) * c
//   result[4] = a + b + c
  
//   return Math.max(...result)
// }


// Task 8: Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

a = 1
b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  let results = [a]
  let max = results.slice(-1)

  for(let i = max; i < b; i++) {
    results.push(a += 1)
  }
  return results
}