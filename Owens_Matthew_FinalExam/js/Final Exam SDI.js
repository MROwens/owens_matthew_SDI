
 /*
Matt Owens
3/28/15
Section 00
Final Exam SDI
 */
//alert("Java Works");

 var itemCost=prompt("We are finding the discount price of an item. Please enter the cost of the item.");

 while(itemCost===""||isNaN(itemCost)){
     if(itemCost===""){
         itemCost=prompt("Please do not leave blank.\n What is the cost of the item?");
     }else if(isNaN(itemCost)){
         itemCost=prompt("Please only enter a number. \n What is the cost of the item?");
     }
 }

 var discount=prompt("What is the discount on the item?");

 while(discount<0||discount>100||discount===""||isNaN(discount)){
     if(discount<0){
         discount=prompt("Please only enter a value between 0 and 100. \n What is the discount of the item?");
     }else if(discount>100){
         discount=prompt("Please only enter a value between 0 and 100. \n What is the discount of the item?");
     }else if(discount===""){
         discount=prompt("Please do not leave blank. \n What is the discount of the item?");
     }else if(isNaN(discount)){
         discount=prompt("Please only enter a number. \n What is the discount of the item?");
     }
 }

 function discountedCost(cost,discount){
     var amountOff=(discount/100)*cost;
     var discountPrice=cost-amountOff;
     return discountPrice;
 }

 var discountPrice=discountedCost(itemCost,discount);

 console.log("The final cost of an item that costs $"+itemCost+" with a discount of "+discount+"% is $"+discountPrice+".");

 /*
 Entered cost as 100 with a discount of 50. Got a final output of "The final cost of an item that costs $100 with a discount of 50% is $50."

 Entered cost as 100 with a discount of 25. Got a final output of "The final cost of an item that costs $100 with a discount of 25% is $75."

  */