
 /*
Matt Owens
3/17/15
Section 00
Loops Worksheet
 */
//alert("Java Works");

 var question1=prompt("Please enter a number.");

 while(isNaN(question1)||question1===""){
     if(question1===""){
          question1=prompt("Please do not leave blank.\n Please enter a number")
     }else if(isNaN(question1)){
         question1=prompt("Please only enter a number. \n Please enter a number.")
     }
 }

var question2=prompt("Do you call the carbonated drink in a can Pop or Soda?");
 question2=question2.toLowerCase();
 while(question2!="pop"&&question2!="soda"){
    question2=prompt("Please only enter Pop or Soda.")
 }

