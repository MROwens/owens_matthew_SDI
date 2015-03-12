
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

boss=boss.toLowerCase();
if(boss==="yes"){
    exp=1000;
    alert("Congratulations, you gain a base of 1000 exp.");
}else if(difficulty!="yes"){
    exp=0;
    alert("You have died. Please try again.")
     prompt("Did you defeat the boss of the dungeon?")
}

var difficulty=prompt("What is the difficulty of the boss set at?");

difficulty=difficulty.toLowerCase();

if(difficulty!="easy"&&difficulty!="medium"&&difficulty!="hard"){
    difficulty=prompt("Please only enter a difficulty of Easy, Medium, or Hard. What is the difficulty of the boss set at?")

}else if(difficulty==="easy"){
    alert("You have gained a bonus of 500 experience.");
    exp+=500;
}else if(difficulty==="medium"){
    alert("You have gained a bonus of 1000 experience.");
    exp+=1000;
}else if(difficulty==="hard"){
    alert("You have gained a bonus of 1500 experience.");
    exp+=1500;
}

console.log(exp);




