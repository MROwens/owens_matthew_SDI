
 /*
Matt Owens
3/14/15
Section 00
Day 6 While Loops
 */
//alert("Java Works");


 //Basic while loops
 //Start a counter var
 var counter=0;

 //Start the while loop
 //Condition to test goes inside ()
 while(counter<=200){
     console.log("Somethings never end!");
     console.log(counter);

     //Make a change to the counting variable
     counter+=50;
 }


 //Do while Loop
 //This loop will run the code first, then check a condition

 /*
 do{
 Code to run
 } while(condition to test) ;

  */

 //Declare a counting var
 var i=0;

 do{
     console.log("The number is "+i+".");
     //Change the counting var
     i++;
 } while(i<=10);