window.addEventListener("DOMcontentLoaded", showTime());


function showTime() {
    let date = new Date();

    //date-set-time
    //date.setTime(5000000);

    //console.log(date.setTime(50000));

    //declare 3 elements
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h==0){
        h=12; 
    }

    if (h>12){
        h = h-12;
        session = "PM";
    }

/*
    if (h<10){
        h = "0" + h; 
    }

    if (m<10){
        m = "0" + m; 
    }
    if (s<10){
        s = "0" + s; 
    }
*/
    h = h<10 ? (h='0' + h) : h;
    m = m<10 ? (m='0' + m) : m;
    s = s<10 ? (s='0' + s) : s;

    //const time = h + ":" + m + ":" + s + "" + '|'+ "" + session;  
    //console.log(time);
    const time =`${h}:${m}:${s}<small> ${session}</small>`;
    document.getElementById("Displayclock") .innerHTML = time;
    setTimeout(showTime, 1000);

    //change body background

    let bg;

    const userName ="Juri";
    const user = document.getElementById("User");
   // console.log(user);

   if (h>=7 && session === "AM"){
    bg = `url("./images/rise&shine.jpeg")`; 
       user.innerHTML = `Rise and Shine`; 
   }
   else if (h==8 && session === "AM"){
    bg = `url("./images/morningworkout.png")`;
    user.innerHTML = `Morning Grind!`; 
}
   else if (h<8 && h==12 && session === "AM"){
    bg = `url("./images/lunchtime.jpeg")`;
    user.innerHTML = `OMG TIME FOR LUNCH!!!!`; 
   }
   else if (h>1 && session === "PM"){
    bg = `url("./images/schooltime.jpeg")`;
    user.innerHTML = `Ughhh....School :P`; 
}
  else if (h=7 && session === "PM"){
    bg = `url("./images/end of school.jpeg")`;
    user.innerHTML = `~ ${userName} is free ~ `; 
}
else if (h>7 && session === "AM"){
    bg = `url("./images/hwsesh.jpeg")`;
    user.innerHTML = `HW SESH`; 
}

else {    
    bg = `url("./images/sleep.jpeg")`;
user.innerHTML = `Time for Bed`; 
}


//insert bg image
const body = document.querySelector("body");
body.style.background= `${bg} center/cover`;
}

document
.querySelector(".focus-container input")
.addEventListener("keypress", function(event){
    if (event.key==="Enter"){
        const focus =document.querySelector(".focus-container input");
    document.querySelector(".focus-container").innerHTML= `<h6>THXX XOXO:</h6><h3>${focus.value}</h3>`
    }
    
});