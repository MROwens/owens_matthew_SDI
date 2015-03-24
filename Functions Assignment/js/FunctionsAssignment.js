
 /*
Matt Owens
3/24/15
Section 00
Functions Assignment
 */
//alert("Java Works");

 //Calculating how much you spend on Starbucks a month
 function starbucks(price,weekly,monthly){
     var starbucksSpending=(price+weekly)*monthly;
     return starbucksSpending;
 }

//Prompting the user on how much they usually spend on starbucks each visit and setting the answer as p
 var p=prompt("We are finding out how much you spend on Starbucks in a month. \n How much is your average starbucks purchase?");

 //Prompting the user on how many times they visit starbucks a week and setting the answer as w
 var w=prompt("How many times do you buy Starbucks a week?");

 //Putting the user responses back into the function of Starbucks
 var spending=starbucks(p,w,4);

 alert("You are currently spending "+spending+"$ a month on Starbucks.")

 //Making a function to find the yearly spending on Starbucks
var starbucksAnon= function(monthly,yearly){
    var annual=monthly*yearly;
    return annual;
}

 var m=prompt("We are now going to figure out how much you spend on Starbucks in a year.\n How much did you spend monthly on starbucks?");

 var yearly=starbucksAnon(m,12);

