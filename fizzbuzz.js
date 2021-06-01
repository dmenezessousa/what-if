// import prompt-sync

const prompt = require('prompt-sync')( );

//get input from user

const fizzBuzz = prompt('Enter a number: ');
const numFizzBuzz = Number(fizzBuzz)

// Fizz Buzz or FizzBuzz

function fizzbuzz(start, end){
    for(let numFizzBuzz = start; numFizzBuzz <= end; numFizzBuzz ++)
        if(numFizzBuzz % 5 === 0 && numFizzBuzz % 3 ===0){
            console.log("FizzBuzz")
        }
        else if(numFizzBuzz % 3 === 0){
            console.log("Fizz")
        }
        else if(numFizzBuzz % 5 === 0){
            console.log("Fuzz")
        }
        else{
            console.log(numFizzBuzz)
        }
}
