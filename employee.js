// Refactor the Code to write a function to get work hours
const PRESENT = 1;
let attendance = Math.floor(Math.random() * 2); 

if (attendance === PRESENT) {
  console.log("Employee is Present");

  const wage = 20;
  const partTime = 4;
  const fullTime = 8;
  const noTime = 0;

  let work = Math.floor(Math.random() * 3); 

  function workdone(work) {
    if(work === 0){
      console.log("Employee did not work today.");
      return noTime;
    } 
    else if(work === 1){
      console.log("Employee worked Part-Time today.");
      return partTime;
    } 
    else if(work === 2){
      console.log("Employee worked Full-Time today.");
      return fullTime;
    }
  }

  let hoursWorked = workdone(work); 
  let dailyWage = hoursWorked * wage;

  console.log(`Hours Worked: ${hoursWorked}`);
  console.log(`Daily Wage: $${dailyWage}`);
} 
else{
  console.log("Employee is Absent");
}
