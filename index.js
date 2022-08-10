let euroCountries = ["Spain", "Italy", "Germany", "France"];

let asianCountries = ["China", "Japan", "South Korea", "Thailand"];

euroCountries = [...euroCountries, ...asianCountries];
console.log(euroCountries);

console.log("--------------------------------------------------");

let copyCountries = [...asianCountries];
console.log(copyCountries);
console.log(asianCountries);

console.log("--------------------------------------------------");

let arr = [1, 7, 21, 10, 5, 22];

console.log("max num ==>", Math.max(...arr));

console.log("--------------------------------------------------");

let arr2 = [1, 7, 21, 10, 5, 22];

console.log("min num ==>", Math.min(...arr2));

console.log("--------------------------------------------------");

const person = { name: "John" };
const job = { role: "Teacher" };

const cloneGuy = { ...person };
console.log(cloneGuy);

const employee = { ...person, ...job };
console.log(employee);

job.role = "Baker";
console.log(job);
console.log(employee);

console.log("--------------------------------------------------");

function isWhole(a, b, x, y) {
  let total = a + b + x + y;
  //let average = total / 4;
  let average = total / arguments.length;

  return Number.isInteger(average);
}

console.log(isWhole(1, 7, 4, 8));
