// import prompt-sync

const prompt = require('prompt-sync')();

// ask for a number input

const weekday = prompt('Enter a number to know which weekday is it:  ');

const numWeek = Number(weekday);

// give a weekday according to the number given

const n = 1;


if ( numWeek === n){
    console.log('Monday');
}
else if (numWeek === n + 1){
    console.log('Tuesday');
}
else if (numWeek === n + 2){
    console.log('Wednesday');
}
else if (numWeek === n + 3){
    console.log('Thursday');
}
else if (numWeek === n + 4){
    console.log('Friday');
}
else if (numWeek === n + 5){
    console.log('Saturday');
}
else if (numWeek === n + 6){
    console.log('Sunday');
}
else if (numWeek  < n || numWeek > n + 6){
    console.log('Error');
}
else if (isNaN()) {
    console.log('Error');
}

