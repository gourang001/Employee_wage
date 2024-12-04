const wage = 20;
const partTime = 4;
const fullTime = 8;
const noTime = 0;
const workingDays = 20;


function getWorkHours(workType) {
  if (workType === 0) {
    return noTime; 
  } else if (workType === 1) {
    return partTime; 
  } else if (workType === 2) {
    return fullTime; 
  } 
}


function calculateMonthlyWages() {
  let totalWages = 0;
  let totalHours = 0;

  for (let day = 1; day <= workingDays; day++) {
    const workType = Math.floor(Math.random() * 3); 
    const dailyHours = getWorkHours(workType);
    const dailyWage = dailyHours * wage;

    totalHours += dailyHours;
    totalWages += dailyWage;

    console.log(`Day ${day}: Worked ${dailyHours} hours, Earned $${dailyWage}`);
  }

  console.log(`\nTotal Hours Worked in the Month: ${totalHours}`);
  console.log(`Total Wages for the Month: $${totalWages}`);
}


const PRESENT = 1; 
let attendance = Math.floor(Math.random() * 2); 

if (attendance === PRESENT) {
  console.log("Employee is Present\n");
  calculateMonthlyWages(); 
} else {
  console.log("Employee is Absent\n");
}
