//for loop with of operator

//it is used to iterate array elements
/*  

<<Syntax>>

    for (var <name> of <array>){

    }
*/
var data = [100, 250, 300, 160, 450, 560]; // totalAmount of Each Product=  2 pea all 6 products

for (var element of data) {
  var totalAmount = 2 * element;
  console.log(totalAmount);
}