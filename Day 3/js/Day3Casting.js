
 /*
Matt Owens
3/7/15
Section 00
Day 3 Casting
 */
//alert("Java Works");

 //Casting variables means treating one data type like another...if possible

 var stringVar="6";
 var results=7+stringVar;
 console.log(results);

 //Number() - treats whatever is inside like a number if possible
 var castingResults=7+Number(stringVar);
 console.log(castingResults);

 //Cast numbers to be a text string
 //String() - treats whatever is inside like a text string
 var areaCode=407;
 var prefix=555;
 var lineNumber=1234;

 var phoneNumber=String(areaCode)+String(prefix)+String(lineNumber);
 console.log(phoneNumber);

 console.log("("+areaCode+")"+prefix+"-"+lineNumber);

 //Parsing Integers
 //parseInt() - looks through a text string and returns and integer
 //Only the first number in a string is returned
 //If the first character in the text string cannot be converted into a number, then it returns NaN = Not a Number
 var a=parseInt("40 years old");
 console.log(a);

 var b=Number("40 years old");
 console.log(b);

 var c=parseInt("He was 40");
 console.log(c);

 //Prompts only return text strings
 var tShirtOwned=prompt("How many t-shirts do you currently own?");

 //Ask the user how many they bought
 var tShirtsBought=prompt("How many t-shirts did you buy today?");

 //Calculate the total number of t-shirts
 var totalShirts=parseInt(tShirtOwned)+Number(tShirtsBought);
 console.log("You currently own "+totalShirts+" shirts.");
