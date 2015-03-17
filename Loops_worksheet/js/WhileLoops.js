
 /*
Matt Owens
3/17/15
Section 00
Loops Worksheet
 */
//alert("Java Works");

 //Setting a counting variable
 var count=10;

 //Setting the while loop to loop until counter hits 1 then break the loop to print out "We have liftoff!"
while(count>=0){
    console.log("Rocket launch in T-minus "+count);
    count--;
    if(count===0){
        console.log("We have liftoff!")
        break;
    }
}
