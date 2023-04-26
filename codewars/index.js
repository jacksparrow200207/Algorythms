// Task 1: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers

function evenOrOdd(number) {
  //write here
}

Example:  
evenOrOdd(7), => "Odd" 
evenOrOdd(2), => "Even"

Answer:  
function evenOrOdd(number) {
        if(number % 2 == 0) {                      
          return "Even"                                 
        }                                                           
        return "Odd"                                   
}


// Task 2: Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

Answer: 
function reverseWords(str){
    let arr =  str.split(" ")
    let result = ""
    for(i = 0; i < arr.length; i++) {
      if(arr.length > 1) {
        result += `${arr.slice(-1)} `
      }
      if(arr.length == 1) {
        result += arr.slice(-1)
      }
      arr.pop()
      i-- 
    }
      return result ; // reverse those words
  }