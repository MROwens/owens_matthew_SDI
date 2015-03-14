
 /*
Matt Owens
3/12/15
Section 00
Conditionals Assignment
 */
//alert("Java Works");

//Calculating how much of an experience gain you will receive depending on difficulty setting.

 //Setting an empty variable to be filled depending on prompts.
var exp;

 //Prompting the user to fill the exp variable.
var boss=prompt("We are finding out how much experience you gain for defeating a boss depending on difficulty level. Did you defeat the boss of the dungeon?");
//Setting prompt response to lower case as well as prompting the user if they have defeated the boss.
boss=boss.toLowerCase();

//Ternary validating the answer of the prompt
(boss==="yes"?alert("Congratulations, you gain a base of 1000 experience!"):prompt("You have died.\nHave you defeated the boss of the dungeon?"));

 //If the user enters yes, they gain a base of 1000 experience
if(boss==="yes"){
    exp=1000;
}else(exp=0)

//Defining the variable to find the difficulty of the dungeon.
var difficulty=prompt("What is the difficulty of the boss set at?");

//Setting the prompt response to lower case.
difficulty=difficulty.toLowerCase();

//Validating that the user only answers Easy, Medium, or Hard.
if(difficulty!="easy"&&difficulty!="medium"&&difficulty!="hard"){
    difficulty=prompt("Please only enter a difficulty of Easy, Medium, or Hard. What is the difficulty of the boss set at?")
//Adding on bonus experience depending on the difficulty the boss was set at.
}
 if(difficulty==="easy"){
    alert("You have gained a bonus of 500 experience.");
    exp+=500;
}else if(difficulty==="medium"){
    alert("You have gained a bonus of 1000 experience.");
    exp+=1000;
}else if(difficulty==="hard"){
    alert("You have gained a bonus of 1500 experience.");
    exp+=1500;
}

 //Prompting the user for the experience multiplier of the boss
var expMultiplier=prompt("We are now going to find your experience after your multiplier buff is applied.\n Is your experience buff 2x, 3x, or 4x?");

 //Validating that the user only puts in 2x, 3x, or 4x for the multiplier
if(expMultiplier!="2x"&&expMultiplier!="3x"&&expMultiplier!="4x"){
    expMultiplier=prompt("Only enter a experience multiplier of 2x, 3x, or 4x.\n What is your experience multiplier?");
}
//Multiplying the experience gain depending on the applied multiplier
if(expMultiplier==="2x"){
    exp*=2;
}else if(expMultiplier==="3x"){
    exp*=3;
}else if(expMultiplier==="4x"){
    exp*=4;
}
//Writing the final calculation out to the console
 console.log("For defeating Azmodan: Destroyer of Worlds you have gained a base experience of 1000. With your level difficulty of "+difficulty+" and your multiplier of "+expMultiplier+" you have gained a total experience of "+exp+". Congratulations!!");

 /*
 Entering a initial value of "Yes" and a difficulty of "Hard" and lastly a multiplier of 2x I receive the final output of 5000 experience.
  */