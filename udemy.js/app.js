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

const spending_threshould = 200;
const tax_rate = 0.08;
const phone_price = 99.99;
const accessory_price = 9.99;

let bank_balance = 303.91;
let amount = 0;

//deklarisemo uopstene funkcije
const calculateTax = () => {
  return amount * tax_rate;
};
const formatAmount = () => {
  return "$" + amount.toFixed(2);
};
//-------------------------------
//
while (amount < bank_balance) {
  amount = amount + phone_price;
  if (amount < spending_threshould) {
    //ako je telefon jeftiniji od praga trosenja dodajemo accessorys
    amount = amount + accessory_price;
  }
}
//dodajemo porez

amount = amount + calculateTax(amount);
console.log("iznos kupovine" + formatAmount(amount)); //koristimo funkciju za formatiranje

if (amount > bank_balance) {
  console.log("ne mogu sebi priustiti ovu kupovinu");
}
