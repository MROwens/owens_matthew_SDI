
 /*
Matt Owens
3/12/15
Section 00
Day 5 Steaks
 */
//alert("Java Works");


//Test a steak temperature and tell the user the done-ness level

/*
 Extra-rare or Blue 115–120 °F
 Rare 	125–130 °F
 Medium rare 	130–140 °F
 Medium 140–150 °F	145 °F
 Medium well 150–155 °F
 Well done 	160 °F+
 */

//Create a variable for our steak temp
 var steakTemp=prompt("What is the temperature of your steak?");

 //Test each of the cases above to see where our temp falls into

 if(steakTemp<115){
     console.log("Your steak is uncooked.");
 } else if(steakTemp<125){
     console.log("Your steak is extra-rare or blue.");
 } else if(steakTemp<130){
     console.log("'Your steak is rare.");
 } else if(steakTemp<140){
     console.log("Your steak is medium-rare.");
 } else if(steakTemp<150){
     console.log("Your steak is medium.");
 }else if(steakTemp<155){
     console.log("Your steak is medium-well");
 }else if(steakTemp<160){
     console.log("Your steak is well-done.");
 }else{
     console.log("Your steak is burnt.");
 }


