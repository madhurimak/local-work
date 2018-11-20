var raceNumber = Math.floor(Math.random()*1000);
var registeredEarly = false;
var runnerAge = 19;
if( registeredEarly === true && runnerAge>18){
    raceNumber += 1000;
    console.log('you will race at 9.30 am '+ raceNumber);
} else if(registeredEarly === false && runnerAge>18){
    console.log('Late adults run at 11.00 am ' + raceNumber);
} else if (runnerAge<18){
    console.log('Youth registrants run at 12.30 pm (regardless of registration) ' + raceNumber);
} else {
    console.log('runner to see the registration desk');
}