// import prompt-sync

const prompt = require('prompt-sync')( );

//get input from user

const weight = prompt('What is your weight on Earth?  ');
const weightClass = Number(weight)

//give user his weight on other planets

const w = 0;
const venus = weightClass * 0.78;
const mars = weightClass * 0.39;
const jupiter = weightClass * 2.65;
const saturn = weightClass * 1.17;
const uranus = weightClass * 1.05;
const neptune = weightClass * 1.23


if ( weightClass >= w){
    console.log('Venus= ' venus);
    console.log('Mars= ' mars);
    console.log('Jupiter= 'jupiter);
    console.log('Saturn= 'saturn);
    console.log('Uranus= 'uranus);
    console.log('Neptune= 'neptune);
} else  (isNaN()) {
    console.log('Error');
}
