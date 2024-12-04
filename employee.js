// Ability to Check Employee is present or Absent 
const PRESENT = 1;
let attendance = Math.floor(Math.random() * 2); 

if(attendance == PRESENT){
  console.log("Employee is Present");
const wage = 20;
const partTime = 4;
const fullTime = 8;
const noTime = 0;

let work = Math.floor(Math.random() * 3); 

let hoursWorked;

if (work === 0) {
  hoursWorked = noTime;
  console.log("Employee did not work today.");
} 
else if (work === 1) {
  hoursWorked = partTime;
  console.log("Employee worked Part-Time today.");
} 
else if (work === 2) {
  hoursWorked = fullTime;
  console.log("Employee worked Full-Time today.");
}


let dailyWage = hoursWorked * wage;

console.log(`Hours Worked: ${hoursWorked}`);
console.log(`Daily Wage: ${dailyWage}`);

}
else{
  console.log("Employee is Absent");
}
