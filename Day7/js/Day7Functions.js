
 /*
Matt Owens
3/17/15
Section 00
Day 7 Functions
 */
//alert("Java Works");

 //Function call the printHello before it is defined
 printHello();

 //Basic structure of a function
 //functions functionName(){ code to run }
 //Create a function that will console.log out hello
 function printHello(){
     console.log("Hello.");
 }

 //Create a function that prints our more text
 function printMore(){
     console.log("Prints more text.");
 }

 //Function call the printHello function
 //functionName();

 printHello();
 printMore();
 printHello();

 //Function call printMore
 printMore();

 //Create a function that calc the area of a rectangle
 function calcArea(){
     //Create variables for width, height, and area
     var width=20;
     var height=30;
     var area=width*height;

     //Print out area
     console.log("The area is "+area)
 }

//Function call the calcArea
 calcArea();