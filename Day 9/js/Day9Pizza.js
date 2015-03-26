
 /*
Matt Owens
3/26/15
Section 00
Day 9 Pizza
 */
//alert("Java Works");


 //How much pizza costs per slice and how much per sq in of pizza

 //Prompt for radius

 var pizzaRadius=prompt("Welcome, lets calculate the cost of your pizza. What is the radius of your pizza?");

 while(pizzaRadius===""||isNaN(pizzaRadius)){
     pizzaRadius=prompt("Please do not leave blank and only enter a number. What is the radius of your pizza?");
 }

 //Prompt the user for cost of whole pizza
do {
    var pizzaCost = prompt("How much does your pizza cost in total?\n Please do not leave blank and only use numbers.");
}while(pizzaCost===""||isNaN(pizzaCost));

 //Prompt for how many slices in a pizza

 do{
     var pizzaSlices=prompt("How many slices are in your pizza?\n Only use numbers and do not leave blank.");
 }while(pizzaSlices===""||isNaN(pizzaSlices));



 //Function call to lord function
 var results=lordFunction(pizzaRadius,pizzaCost,pizzaSlices);

 //Console.log to the user
 console.log("Your pizza cost $"+results[0]+" per sq inch or $"+results[1]+" per slice.")



 function lordFunction(radius,cost,slices){
     //Call other 3 functions and return the values
     //Call the area function and capture the answer
     var area=pizzaArea(radius);

     //Call the function sqIn cost
     var areaCost=pizzaSqInCost(area,cost);

     //Call the slice per price
     var slicePrice=pricePerSlice(slices,cost);

     //Return these answers to our main code
     return [areaCost,slicePrice];
 }

 //Function that calculates the area of the pizza
 function pizzaArea(r){
     //r * r * PI
     area=Math.PI*r*r;
     return area;
 }







 //Function that calculates the price per sq in of pizza.
 function pizzaSqInCost(area,price){
     var costPerSqIn=price/area;

     //Round to nearest cent

     costPerSqIn=costPerSqIn.toFixed(2);

     return costPerSqIn;
 }

 //Function that calculates price per slice
 function pricePerSlice(slices,price){
     //price/slices
     var costPerSlice=price/slices;
     costPerSlice=costPerSlice.toFixed(2);
     return costPerSlice;
 }