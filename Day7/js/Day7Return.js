
 /*
Matt Owens
3/17/15
Section 00
Day 7 Return
 */
//alert("Java Works");


//Return a value from our function to our main code
 //Create a function calc area of rectangle
 function calcArea(w,h){
     //Calc the area
     var area=w*h;
     console.log("Inside the function, the area is "+area);

     //Return the area to the main code
    return area;
 }

 //Call function
 //Create a variable to catch the return value
 var rectArea=calcArea(10,20);

 //Console.log the area
 // Doesn't work - console.log(area);

 console.log(rectArea);


 //Create a function to calc the area of a circle
 function circleArea(rad){
     //Calc area PI*r*r
     var area=Math.PI*rad*rad;

     //Return the value
     return area;
 }

 //Function call this circleArea
 //Create a variable to catch the returned area

 var results=circleArea(6);

 //Console.log the results
 console.log("The area of the circle is "+results);

