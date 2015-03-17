
 /*
Matt Owens
3/17/15
Section 00
Day 7 Arguments
 */
//alert("Java Works");

 //Arguments - Goes into the functions - part of the function call
 //Parameters - Catch the arguments and in the function definition

 //Create a function that calc the area of a rectangle

 //Add in parameters
 function calcArea(width, height){

     //var width=10;
     //var height=20;
     var area=width*height;

     console.log("The area is "+area);

 }

 //Call the function
 //Add arguments to the function call
 calcArea(10,20);
 calcArea(20,40);

 //Prompt the user for width and height
 var width=prompt("Enter a width.");

 //Enter validation
 var height=prompt("Enter the height.");
 calcArea(width, height);

 //Dog years
 function dogYears(humanAge){
     //Dog years = human years*7
     var dogAge=humanAge*7;

     console.log("Your age in dog years is "+dogAge);
 }

 //Call dog function
 dogYears(4);

 //Prompt user
 var userInput=prompt("Please enter your human age.")

 dogYears(userInput);