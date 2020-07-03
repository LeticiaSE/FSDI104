function updateHour() {
    
    let date = new Date();

    let week = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May","June", "July","August","September", "Octuber", "November", "December"];


    //get the info from the system and save it in a var
    let dayWeek = date.getDay();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // Print the info on the HTML

    document.getElementById("dayWeek").textContent=week[dayWeek];
    document.getElementById("month").textContent=months[month];
    document.getElementById("day").textContent=day;
    document.getElementById("year").textContent=year;

    //add a 0 for the hours, min,sec with 1 digit   ****** challenge
    if (sec<10) {
        sec= "0" + sec;
    }

    if (min<10) {
        min="0" + min;
    }

    //add the am and pm condition

    if (hour>12) {

        ampm="pm";
    }else{
        ampm="am";
    } 

    if (hour==0) {
        hour=12;
    }else if(hour>12) {
        hour=hour-12;
    }

    if (hour<10) {
        hour= "0" + hour;
    }

    document.getElementById("hour").textContent=hour;
    document.getElementById("min").textContent=min;
    document.getElementById("sec").textContent=sec;
        
    document.getElementById("ampm").textContent=ampm;
}
var interval = setInterval(updateHour,1000);