
 /*
Matt Owens
3/12/15
Section 00
Nesting If Statements
 */
//alert("Java Works");

//Some dec affect other decisions

//If it is warm lets go to the beach, if it is not lets go to the movies

 //Get temp
 var temp=prompt("We are going to figure out what you should do today. \n What is the current temperature?");

 //Validate that the user typed in a number.
 //isNaN() - is () not a number



 if(isNaN(temp)){
     //Validating prompts
     temp=prompt("Please to be only entering numbers. \n What is the temperature outside?")
 }

 //Validate that the user typed in something
 if(temp===""){
     temp=prompt("Please to not be leaving blank. \n What is the current temperature outside.")
 }











 if(temp>=80){
     console.log("Lets go to the beach.");
     //Lets set the water temp
     var waterTemp=prompt("What is the temperature of the water?");
     //validate water temp
     if(waterTemp===""||isNaN(waterTemp)){
         //This code will run if the variable is blank or NaN
         //Reprompt the user
         waterTemp=prompt("Please enter and number and do not leave blank. \n What is the water temp.")
     }

     if(waterTemp>75){
         console.log("Lets get in the water.")
         var knowSwim=propmt("Do you know how to swim?")

         if(knowSwim !="yes" && knowSwim !="Yes" && knowSwim!="no")
         knowSwim=prompt("Only type in yes or no. \n Can you swim?")

     }else{
         console.log("Lets get a tan.")
     }
 }else {
     console.log("Lets go to the movies.");
 }

 //Do we have any kids in the group
 var kids=prompt("Are you bringing kids?");
 //Validate
 //Convert to lower case
 kids=kids.toLowerCase();
 if(kids!="yes" && kids!="no"){
     //Re-prompt
     kids=prompt("Please enter only yes or no. \n Are you bringing kids?")
     kids=kids.toLowerCase();
 }

 //Test if we have kids
 if(kids ==="no"){
     console.log("Lets see 50 Shades of Grades.");
 }else{
     console.log("Lets go see Spongebob.");
 }



/*
 //If the water temp is above 75, lets go swimming. If not, lets get a tan.

if(waterTemp>75){
    console.log("Lets get in the water.")
}else{
    console.log("Lets get a tan.")
}
*/


