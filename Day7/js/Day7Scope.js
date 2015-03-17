
 /*
Matt Owens
3/17/15
Section 00
Day 7 Scope
 */
//alert("Java Works");

 //Variable Scope
 //Variables inside and outside of a function

 //Try not to use the same variable names, BUT in big files its going to be impossible

 //Create a variable for width in our main code
 //Scoped outside of the main function - Main code
 var width=5;

 //Create a function that calc the perimeter of a rectangle
 function calcPeri(){
     //Create a variable called width inside of the function
     //This is scoped to the function calcPeri
     var width=10;

     //Create a var for height and perimeter
     var height=20;
     var perimeter=width*2+height*2;

     console.log("Inside of the function, the perimeter is "+perimeter);

     //Variables created inside of a function cannot be accessed outside of the function
     //Variables created outside of the function can be accessed but usually will not be
 }

 console.log("Before the function call width equals "+width);

 //function call the calcPeri

 calcPeri();

 console.log("After the function call, width equals "+width);

 //Console.log out the answer
 //console.log("Outside of the function the perimeter is "+perimeter)
//This does not work. Vegas..