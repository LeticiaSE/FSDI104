console.log("Executing script3");

//for loop

for(var i=0; i<10; i++){
    console.log("Number " + i);
}

// travel an array

const cart = ["logitech mouse", "logitech keyboard", "honor huawei band", "Samsung TV 52in"];

console.table(cart);

for(var j = 0; j<4; j++) {
    console.log(cart[j]);    
}

for (var j = 0; j<cart.length; j++) {
   // console.log("The product in the cart: " + cart[j]);
   // console.log("The product in the cart: " + cart[j]);
    console.log('The product in the cart:  $cart[j]'); // template String
}

    var numbers=[4,7,9,2,0,1];
    var total=0;
    //sum the total of the elements in the array
    
    for (var k=0; k<numbers.length; k++) {
        total=total+numbers[k];
        console.log(total);
    }
    console.log("Total", total);

    //total=numbers[0] + numbers[1] +..+n tambien es correcto hacerlo asi


    const point=1000;
    const logged=true;

    if (logged) {
        console.log("Welcome to the system");       
    }else{
        console.log("Please, Log-in");
    }

    const age=65;

    if (age<50) {
        console.log("You are young");
        
    } else {
        console.log("You are old");
    
    }

    let hour=6;

    if (hour>0 && hour <= 12) {
        console.log("Boungiorno");
        
    } else if(hour>12 && hour<=18){
        console.log("Bounasera");
    
    }else if(hour>18 && hour<=24){
        console.log("Bounanotte");
    
    }else{
        console.log("Invalid");
        
    }


    let cash = 100;
    let totalPayment = 500;
    let card = false;

    if (cash > totalPayment) {
        console.log("Sucessful transaction");
        
    } else if(card){
        console.log("You paid with credit card");
    
    }else{
        console.log("Invalid Transaction");
        
    }


    //Switch case

    const paymentMethod = "cash";

    switch (paymentMethod) {
        case "cash":
            console.log("Cash");
            break;
        case "credit":
            console.log("Credit");
            break;
        case "debit":
            console.log("Debit");
            break;
                
        default:
            console.log("Select a valid method");
            
            break;
    }

    function hello() {      //function declaration
        console.log("Hello");   
    }
//    hello();


 //   let traveling = function(destination) {
 //       return "I am, traveling to " + destination;
  //  }   //function expression

    //arrow function
    let traveling = destination => "I am, traveling to " + destination;
    

    let travel;

    travel=traveling("Italy");
    travel=traveling("New York");

    console.log(travel);
    
    const sum = function(){
        console.log(1+2);   
    }
    sum();

    //IIFE

    (function(topic) {
        console.log("I am learning " + topic);
        
    })("JS");


const sum2 = (a,b) => a + b;

var result=sum2(3,6)*9;
console.log(result);


console.log(sum2(5,8));


