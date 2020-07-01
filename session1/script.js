console.log("Executed");

var userName="Leticia"; // declaration and assignation

userName="lala";
console.log(userName);

//Create a variable carName, assign the value Volvo to it and display it on the console

var carName="Volvo";
console.log(carName);

//Create a variable called x, assign the value 50 to it and display it on the console

var x=50;
console.log(x);


let band="Metalica", song = "Enter sandman";

let name;

name= band + " : " + song;
console.log(name.toUpperCase()); // cambia el texto a mayusculas
console.log(name.length);

let activity= "I am learning JavaScript inthis course";
name=activity.split(" ");  //cuanta as palabras de una frase
console.log(name);

let interests="programming, learning, music, volleyball, series";
name= interests.split(","); //cantidad de palabras
console.log(name);

name=activity.includes("JavaScript"); 
console.log(name);

email="espinoza.leticia@gmail.com"
name=email.includes("@");

console.log(name);
