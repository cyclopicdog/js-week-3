// const hours = [10, 10, 10, 10, 7, 3, 8];

// console.log(hours[hours.length - 1]);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri'];

// days.push('sat', 'sun');

// console.log(days[0], days[2], days[5])
// console.log(days.length);

// const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

// console.log(numbers.length);
// console.log(numbers[13]);
// console.log(numbers[Math.floor(numbers.length / 2)]);

// console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let i = 0; i < numbers.length; i++) {
//   let square = numbers[i] * numbers[i];
//   console.log(square);
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     console.log(numbers[i]);
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === -10) {
//     console.log('The 10s are here:' + i);
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   let diff = numbers[i] - 5;
//   console.log(diff);
// }

// for (let i = 0; i < numbers.length; i++) {
//   let sqr = numbers[i] * numbers[i];
//   let diff = sqr - 5;
//   console.log(diff);
// }

// let negativeNos = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     negativeNos++
//   }
// }
// console.log(negativeNos)

// const total = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

// console.log(total);

// const avg = numbers.reduce((previousValue, currentValue) => previousValue + currentValue) / numbers.length;

// console.log(avg);

// let sumPos = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] >= 0) {
//     sumPos += numbers[i];
//   }
// }

// console.log(sumPos)


// INTERMEDIATE STUFF!!

// for (let i = 0; i < numbers.length; i++) {
//   let nextNum = numbers[i + 1];
//   if (nextNum > numbers[i]) {
//     console.log(numbers[i + 1]);
//   }
// }

// for (let i = 1; i < numbers.length; i++) {
//   let nextNum = numbers[i + 1];
//   let preNum = numbers[i - 1];
//   if (nextNum < numbers[i] && numbers[i] > preNum) {
//     console.log(numbers[i]);
//   }
// }

// const avg = numbers.reduce((previousValue, currentValue) => previousValue + currentValue) / numbers.length;

// let sumOfSqrDiff = 0;

// for (let i = 0; i < numbers.length; i++) {
//   let diff = avg - numbers[i];
//   let sqrDiff = diff * diff;
//   sumOfSqrDiff += sqrDiff;
// }

// console.log(sumOfSqrDiff);

// const avg = numbers.reduce((previousValue, currentValue) => previousValue + currentValue) / numbers.length;

// let sumOfSqrDiff = 0;

// for (let i = 0; i < numbers.length; i++) {
//   let diff = avg - numbers[i];
//   let sqrDiff = diff * diff;

//   sumOfSqrDiff += sqrDiff;
// }

// console.log(sumOfSqrDiff);

// const variance = (sumOfSqrDiff / numbers.length) - (avg / numbers.length);

// console.log(variance);

// let biggest = 0;

// for (let i = 1; i < numbers.length; i++) {
//   let nextNum = numbers[i + 1];
//   let preNum = numbers[i - 1];

//   if (nextNum < numbers[i] && numbers[i] > preNum) {
//     if (numbers[i] > biggest) {
//       biggest = numbers[i];
//     }
//   }
// }

// console.log(biggest);

// let biggestLowerSixteen = 0;

// for (let i = 1; i < numbers.length; i++) {
//   let nextNum = numbers[i + 1];
//   let preNum = numbers[i - 1];



//   if (numbers[i] > biggestLowerSixteen && numbers[i] < 16) {
//     biggestLowerSixteen = numbers[i];
//   }
// }

// console.log(biggestLowerSixteen);

// let newNumbers = [];

// for (let i = 1; i < numbers.length; i++) {
//   newNumbers.push(numbers[numbers.length - i]); // should have used unshift!
// }

// console.log(newNumbers);


const numbers = [18, 8, 9, 10, -24, 28, -17, 14, 5, 4, 3, 2, 1, 0, -10, 24, 12, 8, 9, 10, 11, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

// let longArray = [];
// let tempArray = [];


// for (let i = 0; i < numbers.length; i++) {
//   let lastNum;
//   if (lastNum === null) {
//     numbers[i] = lastNum;
//   } else {
//     lastNum = numbers[i - 1];
//   }

//   let nextNum = numbers[i + 1]

//   // is the next number bigger - if yes push the number
//   if (nextNum > numbers[i]) {
//     tempArray.push(numbers[i]);
//     // end of sequence - if the next number isn't bigger push the current number only if it is bigger than the last one
//   } else if (nextNum < numbers[i] && numbers[i] > lastNum) {
//     tempArray.push(numbers[i]);
//     // if the tempArray is bigger make it the longArray and clear temp array
//     if (tempArray.length > longArray.length) {
//       longArray = tempArray;
//       tempArray = [];
//       // clear the temp if it isn't bigger
//     } else {
//       tempArray = [];
//     }
//   }
//   else {
//     // else start again
//     tempArray = [];
//   }
// }

// console.log(longArray);
// console.log(longArray.length);


let consNum = [];
let tempConsNum = [];

for (let i = 0; i < numbers.length; i++) {
  // set number values

  let lastNum;
  if (lastNum === null) {
    numbers[i] = lastNum;
  } else {
    lastNum = numbers[i - 1];
  }

  let nextNum = numbers[i + 1]

  // is the next number consecutive?
  if (nextNum - numbers[i] === 1) {
    tempConsNum.push(numbers[i]);
  }
  // is it the end of a sequence?
  else if (nextNum - numbers[i] !== 1 && numbers[i] - lastNum === 1) {
    tempConsNum.push(numbers[i]);
    // is the tempArray longer than the current champ?
    if (tempConsNum.length > consNum.length) {
      consNum = tempConsNum;

      tempConsNum = [];
    } else {
      tempConsNum = [];
    }
  } else {
    tempConsNum = [];
  }
}

for (let i = 0; i < numbers.length; i++) {
  // set number values
  let lastNum;
  if (lastNum === null) {
    numbers[i] = lastNum;
  } else {
    lastNum = numbers[i - 1];
  }

  let nextNum = numbers[i + 1]
  // is it the first number?
  if (i === 0) {
    tempConsNum.push(numbers[i]);
  }
  // is the next number consecutive going down?
  else if (lastNum - numbers[i] === 1) {
    tempConsNum.push(numbers[i]);
  }
  // is it the end of a sequence?
  else if (lastNum - numbers[i] !== 1) {
    console.log(tempConsNum);
    // is the tempArray longer than the current champ?
    if (tempConsNum.length > consNum.length) {
      consNum = tempConsNum;
      tempConsNum = [];
    } else {
      tempConsNum = [];
    }
  } else {
    tempConsNum = [];
  }
}

console.log('conSum = ' + consNum);