//Primitive data types:

//string:
// "a234821390sadjlsakd"
//number:
// 25
//boolean:
// true , false

// +
// -
// *
// /
// **
// %
// https://www.w3schools.com/js/js_arithmetic.asp

// ime = "sara";
// console.log(ime);
// console.log(5 == "5");
// console.log(5 === "5");

// console.log("s" === "s");

// console.log(true && true)
// console.log(true && false)
// console.log(false&&true)
// console.log(false && false)

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

//https://www.w3schools.com/js/js_operators.asp

//https://www.youtube.com/watch?v=FSs_JYwnAdI&list=PL0vfts4VzfNixzfaQWwDUg3W5TRbE7CyI&index=2
//https://www.youtube.com/watch?v=DHjqpvDnNGE

// broj = Number(prompt("Unesite neki broj"));
// console.log(broj);

// broj = String(prompt("Unesite neki broj"));
// console.log(broj);
// x = Number(prompt("unesite neki broj"));
// if (x % 2 === 0) {
//   console.log("broj je deljiv sa 2");
// } else {
//   console.log("broj  nije deljiv sa 2 ");
// }
// x = String(prompt("unesite neku rec"));
// if (x === x + x) {
//   console.log("string je dupliran");
// }
// if (x === x) {
//   console.log("string nije dupliran");
// }

// sifra = Number(prompt("unesite sifru"));
// if (sifra === 1234) {
//   console.log("uneta sifra je tacna");
// }
// x = prompt("unesite prvi broj");
// y = prompt("unesite drugi broj");
// if (x === y) {
//   console.log("brojevi su jednaki");
// }
// x = prompt("unesite prvi broj");
// y = prompt("unesite drugi broj");
// if (x > y) {
//   console.log("prvi je veci od drugog");
// }
// x = Number(prompt("unesite neki broj"));
// if (x % 2 === 0) {
//   console.log("broj je paran");
// } else {
//   console.log("broj je neparan");
// }
// x = Number(prompt("unesite neki broj"));
// if (x % 2 === 0) {
//   console.log("broj je paran");
// }
// if (x % 2 !== 0) {
//   console.log("broj je neparan");
// }
// x = Number(prompt("unesite neki broj"));

// if (x > 0) {
//   console.log("broj je pozitivan");
// } else {
//   console.log("bro je negativan");
// }
// x = Number(prompt("unesite neku godinu"));
// if (x % 400 === 0 && x % 100 === 0) {
//   console.log("godina je prestupna");
// }
// if (x % 100 !== 0 && x % 4 === 0) {
//   console.log("godina je  prestupna");
// } else {
//   console.log("nije prestupna");
// }
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(false));
// console.log(Boolean(""));
// console.log(Boolean(null));

//DOmaci uneeti broj bodova ucenika i ispisati ocenu ucenika.
//0-20 bodova - 1
//21-40 bodova - 2
//41-60 bodova - 3
//61-80 bodova - 4
//81-100 bodova - 5

//DOMACI
// x = Number(prompt("unesite bodove od 0-100"));
// if (x > 0 && x <= 20) {
//   console.log("nedovoljan(1)");
// }
// if (x > 20 && x <= 40) {
//   console.log("dovoljan(2)");
// }
// if (x > 40 && x <= 60) {
//   console.log("dobar(3)");
// }
// if (x > 60 && x <= 80) {
//   console.log("vrlo dobar(4)");
// }
// if (x > 80 && x <= 100) {
//   console.log("odlican(5)");
// }
//   for(i=0;i<10;i++){
//       console.log("sald")
//   }

// x = Number(prompt("unesite bodove od 0-100"));
// for (i = 0; i <= x; i++) {
//   console.log(i);
// }
// x = Number(prompt("unesite pocetnu vrednost"));
// y = Number(prompt("unesite krajnju vrednost"));
// for (i = x; i <= y; i++) {
//   console.log(i);
// }

// x = Number(prompt("unesite pocetnu vrednost"));
// y = Number(prompt("unesite krajnju vrednost"));
// for (i = x; i <= y; i += 2) {
//   if (i % 2 == 0) console.log(i);
// }

// x = Number(prompt("unesite pocetnu vrednost"));
// y = Number(prompt("unesite krajnju vrednost"));
// sum=0
// for (i = x; i <= y; i++) {
//   sum+=i
// }
// console.log(sum);
// x = Number(prompt("unesite pocetnu vrednost"));
// y = Number(prompt("unesite krajnju vrednost"));
// for (i = x; i <= y; i++) {
//   console.log(i ** 2);
// }
// x = Number(prompt("unesite brojeve"));
// sum = 0;
// if (x == x) {
//   for (i = 0; i <= x; i++) {
//     y = Number(prompt("unesite brojeve"));
//     console.log(y);
//     sum += i;
//   }
// }
// console.log(sum);
// x = Number(prompt("unesite brojeve"));
// sum=0
// for (i = 0; i <= x; i++){
//   y = Number(prompt("unesite brojeve"));
//   sum+=y
// }
// console.log(sum)

// x = Number(prompt("unesite broj redova"));
// str = "";
// for (i = 0; i <= x; i++) {
//   str += "*";
//   console.log(str);
// }
// x = Number(prompt("unesite broj redova"));
// for (i = 1; i <= x; i++) {
//   console.log(i);
//   {
//     for (j = i; j == i; j++) {
//       console.log(j);
//     }

// }
// x = Number(prompt("unesite broj redova"));
// z = "";
// for (i = 1; i <= x; i++) {
//   for (j = 1; j <= i; j++) {
//     z += j;

//     z += "\n";
//   }
// }
// x = Number(prompt("unesite broj redova"));
// z = "";
// for (i = 1; i <= x; i++) {
//   z += i;
//   console.log(z);
// }
// x = Number(prompt("unesite broj redova"));
// z = "";
// for (i = 1; i <= x; i++) {
//   for (j = 1; j <= i; j++) z += i;
//   console.log(z);
//   z = "";
// }
// x = Number(prompt("unesite broj redova"));
// str = "";
// space = "";
// for (i = 1; i < x; i++) {
//   space += " ";
// }
// for (i = 1; i <= x; i++) {
//   str += "* ";
//   console.log(space + str + space);
//   space = space.slice(1);
// }

// x = Number(prompt("unesite broj "));
// for (i = 1; i <= x; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }
// x = Number(prompt("unesite broj "));
// y = 1;
// sum=0
// for (i = 1; i <= x; i++) {
//   y += 1
//   sum+=parseint(y)
//   console.log(sum);
// }
// x = Number(prompt("unesite broj "));
// string = "";
// broj = 1;
// // External loop
// for (i = 1; i <= x; i++) {
//   // Internal loop
//   for (j = 1; j <= i; j++) {
//     string += broj;
//     broj++;
//   }
//   string += "\n";
// }
// console.log(string);
// kolicina = parseInt(prompt("Koliko brojeve zelite da uneste"));
// sum = 0;
// for (i = 0; i < kolicina; i++) {
//   unos = parseInt(prompt("Unesi broj"));
//   sum += unos;
// }
// console.log(sum / kolicina);
//rec iz malih u velika slova
// rec = String(prompt("unesite neku rec"));
// for (i = 0; i < rec.length; i++) {
//   vslova = rec.toUpperCase();
//   console.log(vslova);
// }

// unos = parseInt(prompt("Unesite broj"));
// fact = 1;
// for (i = 1; i <= unos; i++) {
//   fact = fact * i;
//   console.log(fact);
// }
// let zbir;
// for (let i = 1; i < 11; i += 2) {
//   zbir += i;
//   console.log(zbir);
// }
// x = Math.round(Math.random() * 10);
// y = parseInt(prompt("unesite neki broj"));
// while (y !== x) {
//   console.log("pogresan broj");
//   z = parseInt(prompt("pogresili ste ,pokusajte ponovo"));
// }
// console.log("pogodili ste");
// x = Math.round(Math.random() * 10);
// y = parseInt(prompt("unesite neki broj"));
// while (y !== x) {
//   z = parseInt(prompt("pogresili ste ,pokusajte ponovo"));
//   if (z < x) {
//     console.log("broj je premali");
//   }
//   else{
//     console.log("broj je prevelik");
//   }
// }
// console.log("pogodili ste");
// x = -3;
// unos = parseInt(prompt("unesite neki broj"));
// while (unos !== x) {
//   unos2 = parseInt(prompt("pogresili ste ,pokusajte ponovo"));
//   if (unos2 > 0) {
//     console.log("broj je pozitivan");
//   } else if (unos2 === -3) {
//     console.log("pogodili ste");
//   } else {
//     console.log("broj je negativan");
//   }
// }

// unos = parseInt(prompt("unesite neki broj"));
// sum = 0;
// while (unos >= 0) {
//   sum += unos;
//   unos = parseInt(prompt("unesite neki broj"));
// }
// console.log(sum);
// unos = String(prompt("unesite neko ime"));
// while (unos !== "END") {
//   console.log(unos);
//   unos = String(prompt("unesite neko ime"));
// }
// console.log("I'm Done ");
// unos = parseInt(prompt("unesite potrebe neparne brojeve"));
// pronadjeno = 0;
// broj = 1;
// while (pronadjeno !== unos) {
//   if (broj % 2 === 1) {
//     pronadjeno++;
//     console.log(broj);
//   }
//   broj++;
// }`
// x = "Ana voli Milovana";
// ispalindrom = true;
// withoutSpacesAndSmallLetters = x.replaceAll(" ", "").toLowerCase();
// lastletter = withoutSpacesAndSmallLetters.lenght - 1;
// for (i = 0; i < withoutSpacesAndSmallLetters.lenght; i++) {
//   if (
//     withoutSpacesAndSmallLetters[i] !==
//     withoutSpacesAndSmallLetters[lastletter - i]
//   ) {
//     ispalindrom = false;
//     break;
//   }
// }
// console.log(ispalindrom);
//codewors
// num = [3, 5, 10, 21, 42, 22, 1];
// sum = 0;
// for (i = 0; i < num.length; i++) {
//   sum += num[i];
// }
// console.log(sum);
// numbers = [3, 5, 10, 21, 42, 22, 1];
// x = Number(prompt("unesite neki broj"));
// founded = false;
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] === x) {
//     founded = true;
//     break;
//   }
// }
// if (founded) {
//   console.log("uneti broj postoji");
// } else {
//   console.log("uneti broj ne pripada nizu");
// }
// numbers = [3, 5, 10, 21, 42, 22, 1];
// najveci = numbers[0];
// najmanji = numbers[0];
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > najveci) {
//     najveci = numbers[i];
//   }

//   if (numbers[i] < najmanji) {
//     najmanji = numbers[i];
//   }
// }
// console.log(najveci);
// console.log(najmanji);

// numbers = [3, 5, 10, 21, 42, 22, 1];
// najveci = numbers[0];
// druginajveci = numbers[0];
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > najveci) {
//     najveci = numbers[i];
//   }
//   if (numbers[i] > druginajveci && numbers[i] < najveci) {
//     druginajveci = numbers[i];
//   }
// }
// console.log(druginajveci);

// numbers = [3, 5, 10, 21, 42, 22];
// najveci = numbers[0];
// najmanji = numbers[0];
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > najveci) {
//     najveci = numbers[i];
//   }

//   if (numbers[i] < najmanji) {
//     najmanji = numbers[i];
//   }
// }
// razlika = najveci - najmanji;
// console.log(razlika);
// numbers = [3, 5, 10, 21, 42, 22];

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 0 || numbers[i] === -1) {
//     console.log("sadrzi 0 i -1");
//   }
// }
// numbers = [3, 5, 10, 21, 42, 22, 1];
// x = false;
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] === -1 || numbers[i] === 0) {
//     x = true;
//     break;
//   }
// }
// if (x) {
//   console.log("uneti broj postoji u nizu");
// } else {
//   console.log("uneti broj ne pripada nizu");
// }
// numbers = [3, 5, 10, 21, 42, 22, 1];
// x = false;
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 65 || numbers[i] === 77) {
//     x = true;
//     break;
//   }
// }
// if (x) {
//   console.log("uneti broj postoji u nizu");
// } else {
//   console.log("uneti broj ne pripada nizu");
// }
// numbers = [3, 5, 10, 21, 42, 22, 1];
// num = Number(prompt("unesite neki broj"));
// numbers.push(num);
// console.log(numbers);
// numbers = [1, 2, 3, 4];
// x = [];
// for (i = 0; i < numbers.length; i++) {
//   x.unshift(numbers[i]);
// }
// console.log(x);
// unosinputa = Number(prompt("unesite koliko yelite brojeva u nizu"));
// niz = [];
// for (i = 0; i < unosinputa; i++) {
//   niz.push(Number(prompt("unesite koliko yelite brojeva u nizu")));
// }
// console.log(niz);
// color = ["red", "green", "white", "black"];
// str = color[0];
// for (i = 1; i < color.length; i++) {
//   str += "+" + color[i];
// }
// console.log(str);
// x = "The Quick Brown Fox";
// str = "";
// for (i = 0; i < x.length; i++) {
//   if (i % 2 === 0) {
//     str += x[i].toUpperCase();
//   } else {
//     str += x[i].toLowerCase();
//   }
// }
// console.log(str);
// numbers = [2, 3, 5, 7, 9, 0, 76];
// sum = 0;
// for (i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// console.log(sum);
// arr = [42, 25, 56, 47, 32];
// arr2 = [];
// arr3 = [];
// for (i = 1; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     arr2.push(arr[i]);
//   } else {
//     arr3.push(arr[i]);
//   }
// }
// console.log(arr2);
// console.log(arr3);

// arr = [42, 25, 56, 47, 32];
// arr2 = [];
// for (i = 1; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     arr2.push("-" + arr[i]);
//   }
// }
// console.log(arr2);
// function pitajkorisnika() {
//   unos = Number(prompt("unesite neki broj"));
//   console.log(unos);
// }
// pitajkorisnika();

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(5, 6);
// a = Number(prompt("unesite neki broj"));
// b = Number(prompt("unesite neki broj"));
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(a, b);
// a = Number(prompt("unesite neki broj"));
// function checknumber(x) {
//   if (x % 2 === 0) {
//     console.log("broj je paran");
//   } else {
//     console.log("broj je neparan");
//   }
// }
// checknumber(a);
// numbers = [1, 5, 67, 8];
// function findlargest(numbers) {
//   najveci = numbers[0];
//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] > najveci) {
//       najveci = numbers[i];
//     }
//   }
//   console.log(najveci);
// }
// findlargest(numbers);

// function findlargest(numbers) {
//   najveci = numbers[0];
//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] > najveci) {
//       najveci = numbers[i];
//     }
//   }
//   console.log(najveci);
// }
// findlargest([1, 5, 67, 100]);
// a = "spare";
// b = "pears";
// function anagram(a, b) {
//   for (i = 0; i < a.length; i++) {
//     for (j = 0; j < b.length; j++) {
//       if (a.includes(b)) {
//         console.log("anagram");
//       }
//     }
//   }
// }
// anagram(a, b);

// a = Number(prompt("unesite neki broj"));
// b = Number(prompt("unesite neki broj"));
// c = Number(prompt("unesite neki broj"));
// function vrednost(a, b, c) {
//   sum = (a + b + c) / 3;
//   console.log(sum);
// }
// vrednost(a, b, c);

// n=Number(prompt("unesite neki broj"));
// function kvadrat(n){
//   for(i=0;i<n.length,i++){
//     x=n[i] +n;
//   }
//   console.log(x)
// }
// kvadrat(n)
//------------------------------------------------------------------

// a = Number(prompt("unesite duzinu prve stranice"));
// b = Number(prompt("unesite duzinu druge stranice"));
// c = Number(prompt("unesite duzinu trece stranice "));
// function areaoftriangle(a, b, c) {
//   formula = (a + b + c) / 2;
//   areaValue = Math.sqrt(
//     formula * (formula - a) * (formula - b) * (formula - c) // Math.sqrt() method to find the square root of a number.
//   );
//   console.log(areaValue);
// }

// areaoftriangle(a, b, c);
//----------------------------------------------------
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   x = dadYearsOld - sonYearsOld - sonYearsOld;
//   console.log(x);
// }
// twiceAsOld(36, 7);
//-------------------------------------------
// function sumStr(a, b) {
//   console.log(parseInt(a) + parseInt(b));
// }
// sumStr("", "9");
//-------------------------------------------------------------
// function oddCount(n) {
//   for (i = 0; i <= n; i++)
//     if (i % 2 === !0) {
//       console.log(i);
//     }
// }
// oddCount(15);
//-------------------------------------------------------------------
// function sameCase(a, b) {
//   if (!/^[a-zA-Z]+$/.test(a) || !/^[a-zA-Z]+$/.test(b)) {
//     return -1;
//   }
//   if (
//     (a.toLowerCase() === a && b.toLowerCase() === b) ||
//     (a.toUpperCase() === a && b.toUpperCase() === b)
//   ) {
//     return 1;
//   }
//   return 0;
// }
//------------------------------------------------------------
// function multiplesofanumber(a, b) {
//   //RADI
//   array = [];
//   for (i = 1; i < b; i++) {
//     if (i % a === 0) {
//       array.push(i);
//     }
//   }
//   console.log(array);
// }
// multiplesofanumber(5, 25);
//-----------------------------------------------------------------
// function multiplesofanumber(a, b) {//ne radi
//   array = [];
//   for (i = 0; i < b; i++) {
//     if (i % a === 0) {
//       array.push(b[i]);
//     }
//   }
//   return array;
// }
// console.log(multiplesofanumber(5, [1, 5, 25, 7, 15]));
//--------------------------------------------------------------------------------
//DOMACI
// function findMultiples(integer, limit) {
//   arr = [];

//   for (i = 1; i <= limit; i++) {
//     if (integer * i <= limit) {
//       arr.push(integer * i);
//     }
//   }
//   console.log(arr);
// }
// findMultiples(12, 13);
// function TwoSum(num, target) {
//   let arr = [];
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] + num[j] == target) {
//         arr.push(i);
//         arr.push(j);
//         break;
//       }
//     }
//   }
//   if (arr.length == 0) {
//     console.log("Nema takvih brojeva");
//   } else {
//     console.log(arr);
//   }
// }
// TwoSum([2, 7, 11, 15], 9);

// arr = [3, 9, 1, 27, 54, 23];
// sum = 0;
// mojaF = (e) => {
//   //   console.log(e);
//   sum += e;
//   console.log(sum);
// };

// arr.forEach(mojaF);
// arr = [0, 1, false, 2, undefined, "", 3, null];
// arr2 = [];
// mojaf = (e) => {
//   if (e === v) {
//     console.log(arr2);
//   }
// };
// arr.forEach(mojaf);

// arr = [0, 1, false, 2, undefined, "", 3, null];
// arr2 = [];
// arr = [1, 3, 2, 1, 2];
// arr2 = [];
// arr.forEach((el) => {
//   if (el !== 1 && el !== 2) {
//     arr2.push(el);
//   }
// });
// console.log(arr2);
//--------------------------------------------------
// function mojaf(number) {
//   if (number % 2 === 0) {
//     console.log(number * 8);
//   } else if (number % 2 !== 0) {
//     console.log(number * 9);
//   }
// }
// mojaf(25);
//-------------------------------------------
// function mojaf(str) {
//   string = "";
//   if (parseInt(str) < 5) {
//     string += "0";
//     // console.log(string);
//   } else if (parseInt(str) > 5) {//SMRTNI POKUSAJ
//     string += "1";
//     // console.log(string);
//   }
// }
// mojaf("1,2,4,5,7,9,1");
//---------------------------------------
// function fakeBin(string) {
//   str = "";
//   for (el of string) {
//     if (Number(string) > 5) {
//       str += "1";
//     }
//     // if (Number(string) < 5)
//     else {
//       str += "0";
//     }
//   }
//   console.log(str);
// }
// fakeBin("45389125586");
//------------------------------------------------
// function mojaf(str) {
//   str = "";
//   if (str !== "!") {
//       str+=
//     console.log(str);
//   }
// }
// mojaf("hello world!");

// function powersOfTwo(n) {
//   myArray = [];
//   for (i = 0; i <= n; i++) {
//     // console.log(
//     myArray.push(2 ** i);
//     // );
//   }
//   console.log(myArray);
// }
// powersOfTwo(2);
// data = [1, true, "", "sara", flase, 23, null, undefined, 123, 0, 77];
// arr = data.filter((el) => {
//   return el;
// });
// console.log(arr);
// arr = [2, 3, 5, 69, 2, 6];
// arr2 = arr.filter((el) => {
//   return el > 5;
// });
// console.log(arr2);
// arr = ["sara", "dwooe", "kwjd", "sjihiwdjj"];
// arr2 = arr.filter((el) => {
//   return el.length >= 5;
// });
// console.log(arr2);
// data = [2, 5, 100];
// arr = data.map((el) => {
//   return el * 2;
// });
// console.log(arr);

// data = [2, 5, 100];
// arr = data.map((el) => {
//   return String(el);
// });
// console.log(arr);
// data = ["sara", "dwooe", "kwjd", "FDFGHJKL", "sjihiwdjj"];
// arr = data.map((el) => {
//   return el[0].toUpperCase() + el.slice(1).toLowerCase();
// });
// console.log(arr);
// data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr = data.every((el) => {
//   return el % 2 === 0;
// });
// console.log(arr);
// data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr = data.every((el) => { //funkcija unutar varijable
//   return el > 0;
// });
// console.log(arr);

// brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr = brojevi.map((el) => {
//   return String(el);
// });
// console.log(arr);
// library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];
// library.forEach((element) => {
//   console.log(element.author, ":", element.readingStatus);
// });
//metoda je funkcija u objektu
// function digitize(n) {
//   arr = [];
//   str = n.toString();
//   for (el of str) arr.unshift(parseInt(el));
//   console.log(arr);
// }
// digitize(12345);
// function repeatstr(n, str) {
//   let result = "";
//   for ( i = 0; i < n; i++) {
//     result += str;
//   }
//   console.log(result);
// }

// repeatstr(3, "*");
// data = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.mesagge);
//   });
// hypertext transfer protocol
// mypromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 2000);
// });
// mypromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// mypromise = new Promise((resolve, reject) => {
//   num = Math.random();
//   if (num < 5) {
//   }
//     resolve(num);
//   reject(`broj je manji od 5(${num})`);
// });
// mypromise
//   .then((res) => {
//     console.log("promise je resolved", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//http metode
//http codovi
//404-not found
//academy.bigbinary.com,15;16
// objekat = {
//   name: "sara",
//   age: 16,
//   city: "novi pazar",
// };
// for (let i = 0; i < objekat.length; i++) {
//   delete objekat.name;
// }
// console.log(objekat);
// console.log(objekat2);
// let arr = [2, 19, 5, 13, 2, 6];
// function proveravanje() {
//   for (let i = 2; i < arr; i++) {
//     if (arr % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let arr2 = arr.filter((el) => {
//   return proveravanje(el);
// });
// console.log(arr2);
//Scope determines the accessibility (visibility) of variables.
//scope je pogled na varijable
