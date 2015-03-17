
 /*
Matt Owens
3/17/15
Section 00
Day 7 Zombies
 */
//alert("Java Works");


 //Zombie Attack
 //We have accidentally created a zombie at Full Sail.
 //A zombie can bite 4 people a day and turn them into zombies the next day.
 //The CDC wants to know how many zombies there will be in 8 days?

 //Givens that we know.
 //How many zombies will we have
 var numZombies=1;

 //How many bites per zombies per day

var numBites=4;

 //Number of days that the CDC wants
 var days=8;

 //Create for loop to calc zombie number
 /*for(var i=1; i<=days; i++){




 }

 //How long will it take to get a million zombies
 */

 var numDays=1;

 while(numZombies<=1000000){
     //How many new zombies get made everyday
     var newZombies=numZombies*numBites;

     //Add new zombies to our existing horde.
     numZombies+=newZombies;
      //Console.log the results
     console.log("There are "+numZombies+" number of zombies on day #"+numDays+"!")

     numDays++;
 }

 console.log("It will take "+(numDays-1)+" days to reach a million zombies.")