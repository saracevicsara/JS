// undefined is a type
// whereas null an object
// the process whereby the interpreter appears to move the declaration of functions,
// variables or classes to the top of their scope, prior to execution of the code
// Thankfully the let and const variables, introduced in ECMAScript 2015, behave differently.
//---------------------------------------------------------------------------------------------
// let bar = "bar";
// console.log(bar); // "bar"
// console.log(foo); // ReferenceError because we're in the TDZ
// let foo = "foo"; // End of foo's TDZ
//---------------------------------------------------------------------------
// If we try to call the variable that the function expression
// was assigned to, we will get a TypeError or ReferenceError,
//  depending on the variable's scope:
//-----------------------------------------------------------------
// Deklarisanje i definisanje promenjive su dva različita postupka. “Deklaracija promenjive” je postupak stvaranja promenjive,
//  tada se definiše ime promenjive i obezbedjuje prostor za njeno skladištenje,
//  dok je “definisanje promenjive” postupak kada se promenjivoj dodeljuje neka vrednost koja se smešta u prostor za skladištenje.
//-------------------------------------------------------------------------------------------------------------------------
//deklarisanje-var,let,const
// Razlika izmedju pojmova “deklaracijie funkcije” i “function expression”
//  se najlakše objašnjava na primerima:

// function test() {}          // function declaration
// var test = function() {};   // function expression

// Osnovna razlika je u poziciji specijalne reči function unutar izraza: ukoliko je reč “function” na početku izraza onda je u pitanju deklaracija,
//  u ostalim slučajevima je “function expression”.
//----------------------------------------------------------------------------------------------------------------
// The original specification for the language was written by Brendan Eich at Netscape.
// The language was implemented in Netscape Navigator 2.0 and was called Livescript.
// ECMA International started the development of the first edition in 1996.
// There were 2 other implementations, ES2 and ES4, after the first
// . The 5th implementation, ES5, is the defacto standard of the language.
// --------------------------------------------------------------------------------------------
