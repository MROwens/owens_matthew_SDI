/*
Matt Owens
3/7/15
Section 00
Arrays
 */

//alert("Java Works");

//Create a basic array
var avengersNames=["Thor","Hulk","Iron Man","Captain America"];


//Print our whole array
console.log(avengersNames);

//Print out one specific item in the array
console.log(avengersNames[2]);

//Swap items in our array
avengersNames[1]="Black Widow";
console.log(avengersNames);

//Use a variable for the index number
var num=3;
console.log(avengersNames[num]);

//Find the length of an array
//Use its length property = How many items are in the array
//dot syntax - fancy for use a period
console.log(avengersNames.length);

//Add an item to our array
avengersNames[4]="Hawkeye";

avengersNames[avengersNames.length]="Wolverine";
console.log(avengersNames);

//Picking Oranges
var orangesPicked=[13,350,1000,600];

//How many oranges did we pick in total

var totalOranges=orangesPicked[0]+orangesPicked[1]+orangesPicked[2]+orangesPicked[3];
console.log("We have picked "+totalOranges+" Oranges.");

var averageOranges=totalOranges/orangesPicked.length;
console.log("The avarage numbers of oranges picked per day is "+averageOranges+".")

//Create an Array of fruit
var fruitBowl=["Apple","Mango","Grape","Banana"];
console.log(fruitBowl);


//Push - add item into the next open spot
//dot syntax - use a period
fruitBowl.push("Strawberry");
console.log(fruitBowl);

fruitBowl.push("Pineapple");
console.log(fruitBowl);

//Pop - removes the last item from the array
//Also returns that item
var caughtItem=fruitBowl.pop();
console.log(fruitBowl);
console.log(caughtItem);
















