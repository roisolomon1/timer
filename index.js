let displaytimer = document.getElementById("timedisplay")

let start = document.getElementById("startbutton")
let pause = document.getElementById("pausebutton")
let reset = document.getElementById("resetbutton")

let my_interval

let start_time = 0
let time_passed = 0

let secs = 0
let mins = 0 
let hrs = 0

let paused = true

start.addEventListener("click",()=>{
    if(paused){
        paused = false
        my_interval = setInterval(updatetime,1000)
        start_time = Date.now() - time_passed
    }

})
pause.addEventListener("click",()=>{
    if(!paused){
        paused = true
        clearInterval(my_interval)
    }
    
})
reset.addEventListener("click",()=>{
    paused = true
    clearInterval(my_interval)
     start_time = 0
     time_passed = 0

     secs = 0
     mins = 0 
     hrs = 0
     displaytimer.textContent = "00:00:00"

    
})


function updatetime(){
    time_passed = Date.now() - start_time

    secs = Math.floor(time_passed/1000 % 60)
    mins = Math.floor(time_passed/(1000*60) % 60)
    hrs = Math.floor(time_passed/(1000*60*60) % 60)
    
    secs = addzeros(secs)
    mins = addzeros(mins)
    hrs = addzeros(hrs)


    displaytimer.textContent = `${hrs}:${mins}:${secs}`
    
    function addzeros(unit){
        if(("0"+unit).length > 2){
            return unit
        }
        else{
            return "0" + unit
        }
    }
}

console.log(Date.now())