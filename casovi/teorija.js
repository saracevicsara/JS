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
// The main difference between pass by value and pass by reference is that, in a pass by value,
// the parameter value copies to another variable while,
// in a pass by reference, the actual parameter passes to the function.
//---------------------------------------------------------------------------------------------------------------------

//global scope
// const name = "John";
// const age = 30;
// const city = "New York";
// //local scope
// function myfunc() {
//   const name = "Jane";
//   const age = 40;
//   return `${name} is ${age} years old.`;
// }
// console.log(myfunc());
//***************************************************************************************
// Scope in JavaScript refers to the accessibility or visibility of variables and expressions.
//  That means the space where an item,such as a variable or a function,
//   is visible and accessible in your code.
//*********************************************************************************************************
// APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols.
//  For example, the weather bureau’s software system contains daily weather data.
//  The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.
// Application programming interface
// API je kurir koji prenosi zahtev za komuniciranje od jedne strane do druge.
//interface is a set of rules that define the functionality of a software component.
//**************************************************************************************************************************
//GET and POST are two different HTTP request methods.
//GET use when retrieving data from a server.
//use POST when sending data to a server.
//**************************************************************************************************************************
//JSON is a data format that is used to exchange data between programs.-javascript object notation
//**************************************************************************************************************************
// array = ["a", "b", "c"];
// array = ["start", ...array, "end"];
// console.log(array);
// console.log(typeof typeof 1);
