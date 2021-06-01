// import prompt-sync

const prompt = require('prompt-sync')( );

//get input from user

const classSize = prompt('Enter mumber of students: ');
const numGroup = Number(classSize)

// give group number and sizes

const group3 = numGroup / 3;
const group2 = numGroup % 2; 

if (numGroup >= 0){
    console.log('Groups of 3 =' + Math.round(group3));
    console.log('Groups of 2 =' + Math.round(group2));
}
