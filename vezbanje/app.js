// array = [34, 56, 59];
// array[1] = 67;
// console.log(array);
// names = ["sara", "ajsa", "aisa", "hana"];
// for (i = 0; i <= names.lenght; i++) {
//   console.log(names[i]);
// }
// i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
//   if (i === 6) break;
// }
// pom2 = " "

// for(i = 0; i < 11; i++){
//     pom2 += suma[i].toString()
// }
// i = 0;
// do {
//   i++;
//   if (i === 5) continue;
//   console.log(i);
// } while (i < 10);
// e = 0;
// x = 0;
// d = 0;
// b = prompt("Enter a number");
// x = b;

// while (x > 0) {
//   e = x % 10;
//   x = parseInt(x / 10);
//   d = d + e * e * e;
// }

// if (b == d) console.log("given number is an armstrong number");
// else console.log("given number is not an armstrong number");
//---------------------FUNKCIJE------------------------------
// function add(br1, br2) {
//   sum = br1 + br2;
//   return sum;
// }
// br1 = 5;
// br2 = 9;
// console.log(add(br1, br2));
// numbers = [2, 3, 5, 7, 9, 0, 76];
// sum = 0;
// for (i = 0; i < numbers.length; i++) {
//   sum =sum+ numbers[i];//uzima vrednost sume i dodaje posebno svaki karakter iz niza
// }
// console.log(sum);
// numbers = [2, 3, 5, 7, 9, 0, 76];
// x = Number(prompt("probaj broj"));
// founded = false;
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] === x) {
//     founded = true;
//     break;
//   }
// }
// if (founded) {
//   console.log("broj se sadrzi u nizu");
// } else {
//   console.log("broj se ne sadrzi u nizu");
// }numbers = [2, 3, 5, 7, 9, 0, 76];
// x = Number(prompt("probaj broj 2,3,5,7,9,0,76"));
// index = 0;

// for (i = 0; i < numbers.length; i++) {
//   i = 0;
//   while (i < numbers[i]) {
//     if (numbers[i] === index) {
//       i += 1;
//     }
//   }
// }
// console.log(index);
//
// numbers = [2, 3, 5, 7, 9, 0, 76];
// numbers.splice(0, 0, 1001);
// console.log(numbers);
// function multiplesOf(numbers, number) { // add second argument
//     var multiples = []; // change to array (so that we can store multiple numbers - not just one multiple)
//     for (var i = 0; i < numbers.length; i++) {
//       if (numbers[i] % number === 0) { // divide by the number
//         multiples.push(numbers[i]); // add the current multiple found to the multiples array
//       }
//     }

//     return multiples;
//   }

//   console.log(multiplesOf([4, 5, 6, 7, 8], 2)); // Output: [4, 6, 8]
//----------------------------------------------------------------------------------------------------------------
// function multiplesOf(numbers, number) {
//   // add second argument
//   var multiples = []; // change to array (so that we can store multiple numbers - not just one multiple)
//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] % number === 0) {
//       // divide by the number
//       multiples.push(numbers[i]); // add the current multiple found to the multiples array
//     }
//   }

//   return multiples;
// }

// console.log(multiplesOf([4, 15, 6, 5, 25], 5));
//----------------------------------------------------------------------------------------
// a = 25;
// b = 5;
// Array = [];
// Array2 = [];
// for (i = 0; i <= a; i++) {
//   Array.push(i);
//   if (Array[i] % b === 0) {
//     Array2 = Array.pop();
//     console.log(Array2);
//   }
// }
// console.log(Array);
