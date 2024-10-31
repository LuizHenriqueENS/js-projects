let time = new Date(2024, 10,31 , 0,0,0,0)




setInterval(timer, 1000)
function timer() {
    document.getElementById('time').innerHTML = `${time.toLocaleTimeString('pt-BR')}`
   if(totalInSec() === 0) return
    time.setSeconds(time.getSeconds() - 1)
}

function resetTime(){
    time.setHours(0,0,0,0)
}

function totalInSec(){

    return (time.getHours()*60)* 60 +time.getMinutes()*60 + time.getSeconds()
}

function add10Sec(){
    time.setSeconds(time.getSeconds()+10) 
    document.getElementById('time').innerHTML =  `${time.toLocaleTimeString('pt-BR')}`
 }

 function add5Min(){
    time.setSeconds(time.getSeconds()+300) 
    document.getElementById('time').innerHTML =  `${time.toLocaleTimeString('pt-BR')}`
 }

 function add1Hou(){
    time.setSeconds(time.getSeconds()+3600) 
    document.getElementById('time').innerHTML =  `${time.toLocaleTimeString('pt-BR')}`
 }