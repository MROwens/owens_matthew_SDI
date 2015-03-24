
 /*
Matt Owens
3/24/15
Section 00
Day 8 Anon
 */
//alert("Java Works");

 //Basic function
 /*
 function function name(){

}
 */

 //Anon function
 /*
 var functionName = function(){

 }
  */

//Anon function are popular in js and jQuery
 //Highly used in object oriented programming
 //Quick and easy
 //Interchangeable for now

 //Build a basic function for area of a triangle

 function triangleArea(b,h){
     var area=.5*b*h;
     return area;
 }

//Anon function

 var triangleAreaAnon= function(b,h){
     var area=.5*b*h;
     return area;
 }

 //Function call to basic function
 var basicArea=triangleArea(5,6);
 console.log("The area from the basic function is "+basicArea);

 //Function call to anon function
 //Calls for anon must be after the anon function
 var anonArea=triangleAreaAnon(4,5);
console.log("The area of the anon function is "+anonArea);

