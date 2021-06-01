// import prompt-sync

const prompt = require('prompt-sync')( );

//get input from user

const age = prompt('How old are you?');

const numAge = Number(age);

//Log out input
const a = 16;
const x = 18;
const y = 24;
const z = 25;

if (numAge< a) {
    console.log("You can't drive.");
} 
else if(numAge === a || numAge === a + 1){
    console.log("You can drive but not vote.");
}
else if(numAge >= x && numAge <= y  ){
    console.log("You can vote but not rent a car.");
}
else if(numAge >= z){
    console.log("You can do pretty much anything.");
}



