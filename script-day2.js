// let row;
// let column;
// let seatNo = prompt("What's your number?");

// if (seatNo > 59) {
//   alert(`There aren't that many seats dum dum!`);
//   seatNo = prompt(`Try again, what's your seat number?`);
// }

// row = Math.floor(seatNo / 10);
// column = seatNo - row * 10;

// This is better!
// column = seatNo % 10;

// row = row + 65;
// row = String.fromCharCode(row);

// alert(`You are seated at row ${row}, column ${column}. Enjoy the film!`);

// let noRows = prompt(`How many rows?`);
// let noColumns = prompt(`How many columns?`);
// let seatNo = prompt("What's your number?");
// let row;
// let column;

// if (seatNo > noRows * noColumns - 1) {
//   let noSeats = noRows * noColumns;
//   alert(
//     `There aren't that many seats dum dum - enter a number between 0 and ${
//       noSeats - 1
//     }!`
//   );
//   seatNo = prompt(`Try again, what's your seat number?`);
// }

// row = Math.floor(seatNo / noColumns);
// column = noRows % noColumns;

// row = row + 65;
// row = String.fromCharCode(row);

// alert(`You are seated at row ${row}, column ${column}. Enjoy the film!`);
