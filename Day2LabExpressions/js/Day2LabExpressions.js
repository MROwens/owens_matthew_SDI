/*
Matt Owens
3/5/15
Section 00
Day 3 Lab Expressions
 */

//alert("Java.");

//Slice of pie part one.
//Assigning and defining variables
var slicesPerBox=8;
var people=10;
var pizzaOrdered=4;
//Multiplying variables to get the total amount of slices
var slicesTotal=slicesPerBox*pizzaOrdered;
//Dividing the slices by people to find how many slices people get
var results=slicesTotal/people;
//Publishing to the console
console.log("Each person ate "+results+" slices of pizza at the party.");

//Slice of pie part two.
//Finding the remainder of slices that goes to sparky
var sparky=slicesTotal%people;
//Publishing to the console
console.log("Sparky gets "+sparky+" slices of pizza.")


//Average shopping bill
//Assigning and defining variables for the weeks of the month
var week1=25;
var week2=63;
var week3=87;
var week4=45;
var week5=55;
//Adding the weekly totals and dividing them by 5 to find the average weekly spending
var monthlySpending=week1+week2+week3+week4+week5;
var average=monthlySpending/5;
//Publishing to the console
console.log("You have spent a total of "+monthlySpending+" on groceries over 5 weeks. That is an average of "+average+" per week.");

//Discounts
//Assigning and defining variables for the price, discount%, sales tax%, and item name
var originalPrice=400;
var discountPercentage=20;
var salesTax=5;
var item="South Norwegian Penguin";
//Turn the whole numbers into percents
discountPercentage/=100;
salesTax/=100;

//Multiplying the discount price by the original price then subtracting the original amount from the discount amount.
var discountAmount=discountPercentage*originalPrice;
var discountPrice=originalPrice-discountAmount;
//Calculating the sales tax and adding it to the discounted price
var taxCalc=discountPrice*salesTax;
var addedSalesTax=taxCalc+discountPrice;
//Turn the percentage decimal back into a whole number
discountPercentage*=100;

//Publishing to the console
console.log("Your "+item+" was originally $"+originalPrice+" but after a "+discountPercentage+"% discount, it is now $"+discountPrice+" without tax, and $"+addedSalesTax+" with tax.");
