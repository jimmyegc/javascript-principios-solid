/* 

S: Single Responsibility Principle
Una clase debe de tener una sola razón para cambiar esto implica que debe
tener solo una tarea o responsabilidad.

*/

// Bad
function calculateSalary(employee) {
  const salary = employee.hoursWorked * employee.payPerHour

  const report = `
    Name: ${employee.name}
    Hours worked: ${employee.hoursWorked}
    Pay per hour: ${employee.payPerHour}
    Total salary: ${salary}
  `

  console.log(report)
  return salary
}

// Better
function calculateSalary(employee) {
  return employee.hoursWorked *+ employee.payPerHour
}

function generateReport(employee, salary) {
  const report = `
    Name: ${employee.name}
    Hours worked: ${employee.hoursWorked}
    Pay per hour: ${employee.payPerHour}
    Total salary: ${salary}
  `
  console.log(report)
}

const salary = calculateSalary(employee)
generateReport(employee, salary)


