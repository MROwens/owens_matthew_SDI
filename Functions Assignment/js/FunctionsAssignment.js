
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

 //Validating the prompt
 while(p===""||isNaN(p)){
     if(isNaN(p)){
         p=prompt("Please only enter a number.\n How much is your average starbucks purchase?");
     }else if(p===""){
         p=prompt("Please do not leave blank.\n How much is your average starbucks purchase?");
     }
 }

 //Prompting the user on how many times they visit starbucks a week and setting the answer as w
 var w=prompt("How many times do you buy Starbucks a week?");

 //Validating the prompt
 while(w===""||isNaN(w)){
     if(isNaN(w)){
       w=prompt("Please only enter a number.\n How many times do you buy Starbucks a week?");
     }else if(w===""){
         w=prompt("Please do not leave blank.\n How many times doe you buy Starbucks a week?");
     }
 }

 //Putting the user responses back into the function of Starbucks
 var spending=starbucks(p,w,4);

 spending=spending.toFixed(2);

 //Letting the user know how much they are spending monthly on Starbucks in order for them to calc the yearly spending
 alert("You are currently spending $"+spending+" a month on Starbucks.")


 //Making a function to find the yearly spending on Starbucks
var starbucksAnon= function(monthly,yearly){
    var annual=monthly*yearly;
    return annual;
}

 //Prompting the user to find the yearly spending on Starbucks
 var m=prompt("We are now going to figure out how much you spend on Starbucks in a year.\n How much did you spend monthly on starbucks?");

 //Validating prompt
 while(m!=spending||isNaN(m)||spending===""){
     if(isNaN(m)){
         m=prompt("Please only enter the number amount of your monthly spending. Your monthly spending was $"+spending+". Please enter that value.")
     }else if(m===""){
         m=prompt("Please do not leave blank.\n Please enter your monthly spending.")
     }else if(m!=spending){
         m=prompt("This is not the amount that was output for your monthly spending. Your monthly spending was $"+spending+". Please enter that value.");
     }
 }

 //Putting the user response of m back into the function to calculate the yearly spending.
 var yearly=starbucksAnon(m,12);

 yearly=yearly.toFixed(2);

console.log("You are spending $"+spending+" monthly on Starbucks. That translates to $"+yearly+" a year.");

 /*
 I entered an initial value of 4.99 then 5 for the days of the week and got an output of $19.98 a month. I input the 19.98 to calculate the yearly cost and got $239.76.
 For a final output of "You are spending $19.98 a month on Starbucks. This translates to $239.76 a year.
  */