
 /*
Matt Owens
3/17/15
Section 00
Day 7 Beer
 */
//alert("Java Works");


 //Code the song 99 bottles of beer on the wall

 //Basic structure of for loop
 //for(var i, ; condition to test; increment of change ){}

 for(var i=99; i>0; i--) {

     if(i===1){
         console.log("1 bottle of beer on the wall. 1 bottle of beer. You take one down, pass it around, no more bottles of beer on the wall.\nThe end.")

     }else{
         console.log(i+" bottles of beer on the wall. "+i+" bottles of beer. You take one down, pass it around, "+i-1+" bottles of beer on the wall.")

     }

 }
