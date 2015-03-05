/*
Matt Owens
3/5/15
Section 00
Day 3 Lab Expressions
 */

//alert("Java.");

//Slice of pie part one.
var slicesPerBox=8;
var people=10;
var pizzaOrdered=4;

var slicesTotal=slicesPerBox*pizzaOrdered;

var results=slicesTotal/people;

console.log("Each person ate "+results+" slices of pizza at the party.");

//Slice of pie part two.

var sparky=slicesTotal%people;

console.log("Sparky gets "+sparky+" slices of pizza.")


//Average shopping bill

var week1=25;
var week2=63;
var week3=87;
var week4=45;
var week5=55;

var monthlySpending=week1+week2+week3+week4+week5;
var average=monthlySpending/5;

console.log("You have spent a total of "+monthlySpending+" on groceries over 5 weeks. That is an average of "+average+" per week.");

//Discounts

var originalPrice=400;
var discountPercentage=.20;
var salesTax=0.05;
var item="South Norwegian Penguin";

var discountAmount=discountPercentage*originalPrice;
var discountPrice=originalPrice-discountAmount;
var taxCalc=discountPrice*salesTax;
var addedSalesTax=taxCalc+discountPrice;


console.log("Your "+item+" was originally $"+originalPrice+" but after a 20% discount, it is now $"+discountPrice+" without tax, and $"+addedSalesTax+" with tax.");
