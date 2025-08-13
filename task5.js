// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary.
// Now calculate is the total salary has to be provided by the company in a month.

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 12, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 2, starting: 29000, increment: 4000 },
];

function calculateSalary(employeeObj) {
  let totalsalary = 0;

  for (employee of employees) {
    let startingSalary = employee.starting;
    let year = employee.experience;
    let increment = employee.increment;
    let currentSalary = startingSalary + increment * year;
    totalsalary += currentSalary;
  }
  console.log(totalsalary);
}

calculateSalary(employees);
