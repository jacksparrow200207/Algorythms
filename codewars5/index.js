// Task 11: Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  let litres = 0.5
  let result = 0
  let timeInteger = Math.floor(time)
  for(let i = 0; i < timeInteger; ++i) {
    result += litres
  }
  
  return Math.floor(result);
}


// Task 12: Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

// // Answer

function solution(a, b){
  let aLength = a.length
  let bLength = b.length
  let result = ""
  if(aLength > bLength) {
    result = b + a + b 
  } else {
    result = a + b + a
  }
  return result
}