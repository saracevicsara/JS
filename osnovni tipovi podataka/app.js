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
x = "Ana voli Milovana";
ispalindrom = true;
withoutSpacesAndSmallLetters = x.replaceAll(" ", "").toLowerCase();
lastletter = withoutSpacesAndSmallLetters.lenght - 1;
for (i = 0; i < withoutSpacesAndSmallLetters.lenght; i++) {
  if (
    withoutSpacesAndSmallLetters[i] !==
    withoutSpacesAndSmallLetters[lastletter - i]
  ) {
    ispalindrom = false;
    break;
  }
}
console.log(ispalindrom);
