
 /*
Matt Owens
3/24/15
Section 00
Day 8 Multipules
 */
//alert("Java Works");

 //Create multiple functions using info from the user

 //Calc the perimeter and area of a rectangle

 function periRect(w,h){
     //Perimeter = 2 * w + 2 * h
     var p=2*w+2*h;
     return p;
 }

 //Create an anon function

 var areaRect= function(w,h){
     var area=w*h;
     return area;
 }

 //Prompt the user for w and h
 var width=prompt("Lets figure out the perimeter of a rectangle. \n What is the width?");

 while(width===""||isNaN(width)) {
     if (width === "") {
         width = prompt("Please do not leave blank.");
     } else if (isNaN(width)) {
         width = prompt("Please only enter a number.")
     }

     //parseInt
     width = parseInt(width);

     var height = prompt("What is the height of the rectangle?");

     while (height === "" || isNaN(height)) {
         height = prompt("Please do not leave blank and only use numbers. \n What is the height?");
     }

 }




