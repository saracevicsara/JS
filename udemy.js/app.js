// let userName = "Max";
// function greetUser(name) {
//   userName = name;
//   console.log(userName);
// }
// userName = "Manu";
// greetUser("Max");
// function prva() {
//   console.log("tandarabandara");
// }
// prva();

// function ime(name) {
//   console.log(name);
// }
// ime("sara");

// function combined(a, b, c) {
//   console.log(a + b + c);
// }
// combined("sara", "sara", "sara");
//47.re-useble function with array
//undefind-default valeu of uninitialized variables
//array is a special type of object
// whilst the two values are similar, they're not equal. undefined is a special type and the default value for undefined variables,
// null is actually of type object and never a default value of anything.
//script in header with defer
//defer-cekati
//parse-analizirati
// let str = "";
// for (let i = 0; i <= 10; i++) {
//   str += "*";
//   console.log(str);
// }
//.toFixed metoda sluzi da broj zaokruzimo na proizvoljne decimale

// let i = 0;
// while (true) {
//   if (i <= 9) {
//     console.log(i);
//     i++;
//   } else {
//     break;
//   }
// }
//ugnjezdena funkcija
//primer i za scope
// function outer() {
//   let a = 4;
//   function inner() {
//     let b = 5;
//     console.log(a + b);
//   }
//   inner();
//   console.log(a);
// }
// outer();

// poglavlje 1
// const spending_threshould = Number(prompt("unesite prag trosenja"));
// const tax_rate = 0.08;
// const phone_price = 99.99;
// const accessory_price = 9.99;

// let bank_balance = Number(prompt("unesite stanje bankovnog racuna"));
// let amount = 0;

// //deklarisemo uopstene funkcije
// const calculateTax = () => {
//   return amount * tax_rate;
// };
// const formatAmount = () => {
//   return "$" + amount.toFixed(2);
// };
// //-------------------------------
// //
// while (amount < bank_balance) {
//   amount = amount + phone_price;
//   if (amount < spending_threshould) {
//     //ako je telefon jeftiniji od praga trosenja dodajemo accessorys
//     amount = amount + accessory_price;
//   }
// }
// //dodajemo porez

// amount = amount + calculateTax(amount);
// console.log("iznos kupovine" + formatAmount(amount)); //koristimo funkciju za formatiranje

// if (bank_balance < amount) {
//   console.log("ne mogu sebi priustiti ovu kupovinu");
// }

// function foo() {
//   let a = 1;
//   function bar() {
//     let b = 2;
//     function baz() {
//       let c = 3;
//       console.log(a, b, c);
//     }
//     baz();
//     console.log(a, b);
//   }
//   bar();
//   console.log(a);
// }

// foo();
//scope and hoisting
// const foo = () => {
//   let a = 1;

//   if (a >= 1) {
//     let b = 2;

//     while (b < 5) {
//       let c = b * 2;
//       b++;
//       console.log(a + c);
//     }
//   }
// };

// foo();

//"use strict"

// const foo = () => {
//   "use strict";
//   let a = 1;
//   console.log(a);
// };

// foo();

//IIFE-IMMEDIATELY INVOKED FUNCTION EXPRESSION-funkcija za trenutno izvrsavaje

// (function sarsi() {   //(...) sprecavaju da se ovo deklarise kao obicna funkcija
//   console.log("sara");
// })();

//closure

// function makeadder(x) {
//   function add(y) {
//     return x + y;
//   }
//   return add;
// }
// let plusOne = makeadder(1);
// let plusTen = makeadder(10);

//prototype object
// let foo = {
//   a: 42,
// };

// let bar = Object.create(foo);
// bar.b = "hello world";
// console.log(bar.b);
// console.log(bar.a);

//LHS/RHS-lefthand side/righthand side
//left-varijabla/right-vrednost

// function foo(a) {
//   let b = a;
//   return a + b;
// }

// let c = foo(2);

// console.log(c);
// console.log(imme); //referenceError
// console.log(ime); //referenceError
// console.log(name); //undefind
// var name = "sara"; //global declaration
// let ime = "sara1";
// const imme = "sara2";
// ime = "sara";
// var ime = "sara";
// sara();
// function sara() {
//   console.log(ime);
// }
// console.log(ime);
//----------------------------
//LET
var foo = true;

if (foo) {
  let bar = foo * 2;
  bar = something(bar);
  console.log(bar);
}
console.log(bar);
