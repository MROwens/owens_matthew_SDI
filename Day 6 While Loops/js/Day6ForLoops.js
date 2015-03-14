
 /*
Matt Owens
3/14/15
Section 00
Day 6 For Loops
 */
//alert("Java Works");


 // for(initialization; condition; increment of change){}
 // we use i a lot in loops - stands for iteration - time around

 for(var i=0; i<=20; i++){
     console.log("The value of i is "+i+".");
 }

 //Break in a loop

 for(var j=0; j<5; j++){
     //Condidtional to see if you can break the loop
     //If the value j is 3, then console.log something differnet
     console.log("The value of j is "+j+".");

     if(j===3){
         console.log("j is 3");
         break;
     }
 }

 //Specific cases for each value

 for(var k=0; k<3; k++){
     if(k===0){
         console.log("The value is zero.");
     }else if(k===1){
         console.log("The value is one.");
     }else if(k===2){
         console.log("The value is two.");
     }
 }