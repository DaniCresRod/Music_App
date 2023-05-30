const noteDo = new Audio("Resources/Audio/do.m4a");
const noteRe = new Audio("Resources/Audio/re.m4a");
const noteMi = new Audio("Resources/Audio/mi.m4a");
const noteFa = new Audio("Resources/Audio/fa.m4a");
const noteSol = new Audio("Resources/Audio/sol.m4a");
const noteLa = new Audio("Resources/Audio/la.m4a");
const noteSi = new Audio("Resources/Audio/si.m4a");

const scaleArray=[noteSi, noteLa, noteSol, noteFa, noteMi, noteRe, noteDo];

document.querySelectorAll("#Flute a").forEach( (x,index)=>{ 
    
    x.addEventListener("click", function(event) {
        event.preventDefault();
        let target=scaleArray[index];
        target.playbackRate=2;
        target.volume=0.2;
        target.play();

        if(target.currentTime>0){
            target.pause();
            target.currentTime=0;
            target.play();
        }
    });
});



