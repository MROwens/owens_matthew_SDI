
 /*
Matt Owens
3/24/15
Section 00
Day 8 Random
 */
//alert("Java Works");

 //Create a function that will give us a random integer between two values

 //Create variables for min and max

 var min=prompt("Lets find a random number between two values. \nPlease enter your min value.");

 //Validate min value
 while(isNaN(min)||min===""){
     min=prompt("Please do not leave blank and only enter a number.")
 }

 var max=prompt("Please enter your max value. Enter a min value");

 //Validate
 while(isNaN(max)||max===""||parseInt(max)<=parseInt(min)){

     if(isNaN(max)){
         max=prompt("Only enter numbers.\n Enter a max.")
     }else if(max===""){
         max=prompt("Do not leave blank.\n Enter a max.")
     }else if(max<=min){
         max=prompt("The max cannot be less than or equal to the min. Enter a value higher than "+min+" \n Enter a max.")
     }
 }

 //function call
 var ranNum=getRandom(min, max);

 console.log("Your random number between "+min+" and "+max+" is "+ranNum)

 //Create our function
 function getRandom(min, max){

     //Generate a random integer
     var randomNumber=Math.round(Math.random()*(max-min)+Number(min));
     return randomNumber;
 }


//15 random numbers - console.log them out
 for(var i=0; i<15; i++){
     console.log(getRandom(min, max));
 }