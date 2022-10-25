const { ipcRenderer, app } = require('electron');

const event = new Event('att')

let src = process.argv[2]
console.log(cpus)
document.addEventListener("DOMContentLoaded", () => {

    let player = document.querySelector('audio');
    let bar = document.querySelector('.duration')
    let fillBar = document.querySelector('.duration-fill')
    
    let play = document.querySelector('#play')
    let pause= document.querySelector('#pause')
    play.addEventListener('click',()=>player.play())
    pause.addEventListener('click',()=>player.pause())
    player.play()
    bar.addEventListener('click',(e)=>
    {
        console.log((bar.getClientRects()[0].width))
       const clickedPercent = ((e.clientX*100)/bar.getClientRects()[0].width)
       const currentTime = (clickedPercent * player.duration)/100
        player.currentTime = currentTime
    })
    let thread = setInterval(() => {
        console.log(player.currentTime,player.duration)
        document.dispatchEvent(event)
        fillBar.style.width = (player.currentTime * 100)/player.duration + '%'
    }, 200)
})


`22s   *   100
     330s           =  X

__________________________________________-
Y  * 100            =  52%
   330

CURRENTTIME   =  (CURRENT% * TOTALTIME)/100



`
