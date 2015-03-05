/*
Matt Owens
3/5/15
Section 00
Day 3 Lab Expressions
 */

//alert("Java.");

//Slice of pie part one.
var slicesPerBox=8;
var people=4;
var pizzaOrdered=6;

var slicesTotal=slicesPerBox*pizzaOrdered;

var results=slicesTotal/people;

console.log("Each person ate "+results+" slices of pizza at the party.");

//Slice of pie part two.

var sparky=results%2;

console.log("Sparky gets "+sparky+" slices of pizza.")

