document.querySelectorAll("#Flute a").forEach( (x,index)=>{ 
    
    x.addEventListener("click", function(evento) {
        evento.preventDefault();
        let target=document.querySelectorAll("audio")[index];
        target.playbackRate=2;
        target.play();

        if(target.currentTime>0){
            target.pause();
            target.currentTime=0;
            target.play();
        }
    });
});



