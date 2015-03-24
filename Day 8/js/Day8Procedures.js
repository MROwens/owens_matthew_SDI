
 /*
Matt Owens
3/7/15
Section 00
Day 8 Procedures
 */
//alert("Java Works");

 //This is a basic function
 function calcAreaF(w,h){
     var area=w*h;
     return area;
 }

 //Function call
 var area=calcAreaF(6,8);

 console.log("The area of the rectangle is "+area+".");


 //This is a procedure
 //A list of steps to do
 function calcAreaP(w,h){
  var area=w*h;
     //Do not return this value
     console.log("Inside the procedure the area is "+area);

 }

 //Function call for procedure?
//Just the function name, not var to catch
 calcAreaP(12,16);
