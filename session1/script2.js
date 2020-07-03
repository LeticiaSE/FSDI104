// arrays

const months = new Array("Jan","Feb","Mar","Apr");

months.push("May"); //add new element at the end

months.unshift("Months 0"); //add a new element at the begining

months[3]="March";

//console.table(months);

//alert("months");

//var numbers = [7,2,4,11,5];



/**Exercise*/

//sun the numbers and save it in a var

var numbers=[9,7,5,2]; 
var totalNumbers;
var average;

//calculate the average

totalNumbers= numbers [0]+ numbers [1]+ numbers [2] +numbers [3] ;

average=totalNumbers/numbers.length;

//display alert();
alert("totalNumbers: " + totalNumbers + "    Average: " + average);
console.table(numbers);
