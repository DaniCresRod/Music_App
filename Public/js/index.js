let hiHat = new Audio("./sounds/hiHat.wav")
let redoblante = new Audio("./sounds/redoblante.wav")
let crash = new Audio("./sounds/crash.wav")
let tom1 = new Audio("./sounds/tom1.wav")
let tom2 = new Audio("./sounds/tom2.wav")
let tom3 = new Audio("./sounds/tom3.wav")
let tom4 = new Audio("./sounds/tom4.wav")
let bombo = new Audio("./sounds/bombo.wav")
let soundsDrums = [crash, tom4, hiHat, tom3, tom1, tom2, redoblante, bombo]


document.querySelectorAll("#drums a").forEach( (x,index)=>{ 
    
    x.addEventListener("click", function(evento) {
        evento.preventDefault();
        let target=soundsDrums[index];
        target.playbackRate=2;
        target.play();

        if(target.currentTime>0){
            target.pause();
            target.currentTime=0;
            target.play();
        }
    });
});

document.querySelectorAll("#drums a").forEach((x,index)=>{
    x.addEventListener("onKeyDown", function(event) {
        event.preventDefault()
        let target = soundsDrums[index]
        target.playbackRate=2
        target.play()
    })
})