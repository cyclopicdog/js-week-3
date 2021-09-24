// const between = (a, b) => {
//   return Math.floor(Math.random() * (b - a + 1)) + a;
// };

// console.log(between(2, 4));

// const setHeadline = () => {
//   document.getElementById("headline").innerHTML = "Javascript functions";
// };

// const changeText = (id, newText) => {
//   let element = document.getElementById(id);
//   element.innerHTML = element.innerHTML + " " + newText;
// };

// const newHeadline = () => {
//   changeText("headline", "...and Javascript events");
// };

// const square = (x) => {
//   return x * x;
// };

// const hypotenuse = (a, b) => {
//   return Math.sqrt(square(a) + square(b));
// };

// const abs = (x) => {
//   return Math.abs(x);
// };

// console.log(abs(-5));

// const emailFromLogin = (user) => user + "@email.com";
// console.log(emailFromLogin("jon"));

// const loginFromName = (first, last) => {
//   let userName = first.slice(0, 4) + last.slice(0, 3);
//   return userName.toLowerCase();
// };

// const emailFromName = (first, last) => {
//   let user = loginFromName(first, last);
//   return emailFromLogin(user);
// };

// console.log(emailFromName("Jonathan", "Doig"));

// const salary = (pay, hours, days) => pay * hours * days;

// console.log(salary(10, 5, 5));

// const taxedSalary = (salary, tax) => {
//   let taxCalc = tax / 100;
//   return salary - salary * taxCalc;
// };

// console.log(taxedSalary(250, 15));

// const max3 = (a, b, c) => {
//   let biggest = a;
//   if (b > biggest) {
//     biggest = b;
//     if (c > biggest) {
//       biggest = c;
//     }
//   }
//   return biggest;
// };

// console.log(max3(5, 15, 1));

// const spread3 = (a, b, c) => {
//   let biggest = a;
//   if (b > biggest) {
//     biggest = b;
//     if (c > biggest) {
//       biggest = c;
//     }
//   }
//   let smallest = a;
//   if (b < smallest) {
//     smallest = c;
//     if (c < smallest) {
//       smallest = c;
//     }
//   }
//   return biggest - smallest;
// };

// let a = Number(prompt("A number please"));
// let b = Number(prompt("A number please"));
// let c = Number(prompt("A number please"));

alert(spread3(a, b, c));
