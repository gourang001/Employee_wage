const wage = 20;
const partTime = 4;
const fullTime = 8;
const noTime = 0;
const workingDays = 20;
const maxWorkingHour = 160;

function getWorkHours(workType) {
  if (workType === 0) {
    return noTime; 
  } else if (workType === 1) {
    return partTime; 
  } else if (workType === 2) {
    return fullTime; 
  }
}

function calculateDailyWage(hours) {
  return hours * wage;
}

function calculateMonthlyWages() {
  let totalWorkingHours = 0;
  let totalWorkingDays = 0;

  while (totalWorkingHours < maxWorkingHour && totalWorkingDays < workingDays) {
    totalWorkingDays++;
    const workType = Math.floor(Math.random() * 3); 
    const dailyHours = getWorkHours(workType);

    totalWorkingHours += dailyHours;

    if (totalWorkingHours > maxWorkingHour) {
      totalWorkingHours = maxWorkingHour;
    }

    const dailyWage = calculateDailyWage(dailyHours);

    console.log(`Day ${totalWorkingDays}: Worked ${dailyHours} hours, Earned $${dailyWage}`);
  }

  const totalWage = calculateDailyWage(totalWorkingHours);

  console.log(`\nTotal Working Days: ${totalWorkingDays}`);
  console.log(`Total Working Hours: ${totalWorkingHours}`);
  console.log(`Total Wage: $${totalWage}`);
}

const PRESENT = 1; 
let attendance = Math.floor(Math.random() * 2); 

if (attendance === PRESENT) {
  console.log("Employee is Present\n");
  calculateMonthlyWages(); 
} else {
  console.log("Employee is Absent\n");
}