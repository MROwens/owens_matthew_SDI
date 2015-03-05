/*
Matt Owens
3/5/15
Section 00
Day 2 Intro
 */

//alert("Java");

/*
Example of a multi-lined comment
Anything inside of here will not be seen by the computer
 */

//This is an example of a single lined comment. Only this line will be ignored

//alert boxes- pop up box that will alert the user with information

//alert("Text that the user will see.")

//Console.log - Shows info to the programmer
//Great for checking values and debugging
//Also shows all errors

console.log("This is the console.");

//Declare a variable
//Use the keyword var

var whatever1;

//Define the variable
//Sets the value of the existing variable

whatever1=42;

//Console.log the variable

console.log("The variable whatever1 is");
console.log(whatever1);

//Declare and define a variable at the same time.

var a=2;

console.log(a);

a=a+3;
console.log(a);

var b;

//Define this variable using an existing variable.

b=a+3;

console.log(a);
console.log(b);

//Simple Math
//Find our ages

var yearBorn=1994;

//2015 minus the year we are born

var ourAge=2015-yearBorn-1;

console.log(ourAge);

//Talk about math
//+,-,*,/

//Find the area of a triangle
//Base * height / 2


var base=4
var height=5

var area=base*height/2;

console.log(area);

//Modulo - %
//Gives the remainder

var remainder=32%10
console.log(remainder);

//Find if even or odd
//%2 1=odd 0=even

var evenOrOdd=67%2
console.log(evenOrOdd);

//Assignment Operators
/*
= - Assigns the value to the variable
++ - Adds one to the current value of the variable
-- - Subtracts one to the current value of the variable
+= # - Adds the number to the current value of the variable
- = # - Subtracts the number to the current value of the variable
/= - Divide the current value by the number
*= - multiply the current value by the number
 */

var assign=0;

//++ is the same as assign = assign + 1
assign++;
console.log(assign);

//-- is the same as assign = assign - 1
assign--;

//+=# the same as assign = assign + #
assign+=5;
console.log(assign);

//-=# same as assign = assign - #
assign-=2;
console.log(assign);

// /= assign = assign / #
assign/=3;
console.log(assign);

// */ assign = assign * #
assign*=2;
console.log(assign);

//Strings- Any text
//Quotes are needed to distinguish between variables and plain text

var kermit="Light Green";
var frogName=kermit;

console.log(frogName);

//To double quote or not to double quote
//Can use a backslash in front of the ' to ignore the '
var phrase="I don't know";
console.log(phrase);

//Escape character can also do multiple lines

var phrase2="I don't know. \nYou never do.";
console.log(phrase2);

//Boolean - like a light switch
//True or False
//Not a text string and must be lower case

var yes=true;
var no=false;


//Order of Operations
//PEMDAS
//(), exponent, multiplication, division, addition, subtraction

//Find average quiz grade

var quiz1=87;
var quiz2=100;
var quiz3=90;

//Average=add them and divide by 3

var average=(quiz1+quiz2+quiz3)/3;
console.log(average);

//Concatination
//Use the +

var firstName="Kermit";
var lastName="The Frog"
var fullName=firstName+" "+lastName;

console.log(fullName);

var d="6";
var e="7";
var combined=a+b;
console.log(combined);

//To round a number we us .toFixed(#)

var num=5.09827302345

//Round to 2 decimal places
var n=num.toFixed(2);
console.log(n);













