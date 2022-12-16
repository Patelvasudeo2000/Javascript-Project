let hourE1 = document.getElementById("hour")
let miniteE1 = document.getElementById("minits")
let secondE1 = document.getElementById("second")
let ampm = document.getElementById("ampm")

function updateclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    //let ampm = "AM"
    let am = h >=12 ? "PM" :  "AM";


//covert 24hr clock To 12hr clock
if(h > 12){
    h = h - 12;
}

    
    hourE1.innerText = h
    miniteE1.innerText = m
    secondE1.innerText = s
    ampm.innerText = "AM"


    setInterval(()=>{
        updateclock()
    },1000)
}
updateclock()