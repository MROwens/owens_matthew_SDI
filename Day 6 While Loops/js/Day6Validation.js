
 /*
Matt Owens
3/14/15
Section 00
Day 6 Validation
 */
//alert("Java Works");


//Ask the user for a number
 var num1=prompt("Enter a number.");

 //Validate that the user typed in a number and didn't leave it blank.
 //Validate using a while loop
 while(isNaN(num1)||num1===""){
     //Re-prompt the user

     if(num1===""){
         num1=prompt("Please to not be leaving blank...\nEnter a number.")
     }else if(isNaN(num1)){
         num1=prompt("Only enter a number.\n Enter a number.");
     }


 }


 //Ask the user a yes or no question
 var userInput=prompt("Please enter yes or no.");
userInput=userInput.toLowerCase();
 while(userInput!="yes"&&userInput!="no"){
     userInput=prompt("Only enter Yes or No.");
 }