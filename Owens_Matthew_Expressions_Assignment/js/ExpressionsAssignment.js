/*
Matt Owens
3/7/15
Section 00
Expressions Assignment
 */

//alert("Java Works");

//Finding the average of amount of experience each player gained over a month in World of Warcraft

//Creating an array to collect the user input of how much experience was gained each week.
var array=[];

//Letting the user know what information we are collecting.
alert("We are going to calculate the average amount of experience you gain a month in World of Warcraft.")
//Prompting the user for values to be put into the array.
array[0]=prompt("How much experience did you gain in the first week of play?");
array[1]=prompt("How about the second week?");
array[2]=prompt("And the third week?");
array[3]=prompt("Finally, how much was gained in the last week of the month?");

var totalExp=Number(array[0])+Number(array[1])+Number(array[2])+Number(array[3]);


var averageExp=totalExp/4;


console.log("You have earned a total of "+totalExp+" experience over the course of "+array.length+" weeks. This averages out to be "+averageExp+" experience a week.")





