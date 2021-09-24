// const age = Number(prompt("How old are you?"));
// const fullPrice = 12;

// const price = (discount) => {
//   let num = fullPrice * discount;
//   Number.parseFloat(num).toFixed(2);
// };

// const children = price(0.33);
// const teens = price(0.65);
// const adults = fullPrice;
// const oaps = price(0.5);

// if (age <= 6) {
//   alert("It's free for you little bitch!");
// } else if (age <= 15) {
//   alert(
//     `You gotta pay, but don't worry you get a 33\% discount. It's ${children}`
//   );
// } else if (age <= 26) {
//   alert(
//     `You gotta pay, but don't worry you get a 65\% discount. It's ${teens}`
//   );
// } else if (age <= 64) {
//   alert(`You gotta pay full price - sorry. It's ${adults}!`);
// } else if (age <= 100) {
//   alert(`You gotta pay, but don't worry you get a 33\% discount. It's ${oaps}`);
// } else {
//   alert(`Damn, you're old - it's free for you!`);
// }

// const morningTemp = Number(prompt("What's the temp this morning?"));
// const afternoonTemp = Number(prompt("What's the temp this afternoon?"));
// const nightTemp = Number(
//   prompt("What's the temp tonight? \n (and what are you doing up?)")
// );

// let highestTemp = morningTemp;

// if (afternoonTemp === highestTemp && nightTemp === highestTemp) {
//   alert("They're all the same!");
// } else if (afternoonTemp > highestTemp && afternoonTemp >= nightTemp) {
//   highestTemp = afternoonTemp;
// } else if (nightTemp > highestTemp) {
//   highestTemp = nightTemp;
// }

// alert(`The highest temp was ${highestTemp}.`);

// const year = Number(prompt("What's the year bitch?"));
// let leapYear = false;

// if (year % 100 === 0) {
//   if (year % 400 === 0) {
//     leapYear = true;
//   }
// } else if (year % 4 === 0) {
//   leapYear = true;
// }

// if (leapYear === true) {
//   document.write("It's a leap year - yay, ladies can propose on the 29th Feb!");
// } else {
//   document.write("Not a leap year - boring!");
// }

// let a;
// let b;
// let c;

// let gold = a;
// let silver;
// let bronze;

// const medals = (a, b, c) => {
//   if (b > gold && b > c) {
//     gold = b;
//     silver = a;
//     bronze = c;
//     if (b > c && b < a) {
//       silver = b;
//       bronze = c;
//       if (c > gold) {
//         gold = c;
//         silver = a;
//         bronze = b;
//       }

//     }

// const year = Number(prompt("What's the year bitch?"));
// let leapYear = false;

// if (year % 100 === 0) {
//   if (year % 400 === 0) {
//     leapYear = true;
//   }
// } else if (year % 4 === 0) {
//   leapYear = true;
// }

// if (leapYear === true) {
//   document.write("It's a leap year - yay, ladies can propose on the 29th Feb!");
// } else {
//   document.write("Not a leap year - boring!");
// }
