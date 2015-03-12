
 /*
Matt Owens
3/12/15
Section 00
Nesting If Statements
 */
//alert("Java Works");

//Some dec affect other decisions

//If it is warm lets go to the beach, if it is not lets go to the movies

 //Get temp
 var temp=75;

 //Lets set the water temp
 var waterTemp=78;



 if(temp>=80){
     console.log("Lets go to the beach.");
     if(waterTemp>75){
         console.log("Lets get in the water.")
     }else{
         console.log("Lets get a tan.")
     }
 }else {
     console.log("Lets go to the movies.");
 }

 //Do we have any kids in the group
 var kids="no";

 //Test if we have kids
 if(kids ==="no"){
     console.log("Lets see 50 Shades of Grades.");
 }else{
     console.log("Lets go see Spongebob.");
 }



/*
 //If the water temp is above 75, lets go swimming. If not, lets get a tan.

if(waterTemp>75){
    console.log("Lets get in the water.")
}else{
    console.log("Lets get a tan.")
}
*/


