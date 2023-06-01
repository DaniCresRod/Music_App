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

document.addEventListener("keydown", function (event) {
    let keyCode = event.keyCode || event.which;

    switch (keyCode) {      
      case 83: // Tecla 'S'
        playSound(scaleArray[0]);
        break;
      case 68: // Tecla 'D' 
        playSound(scaleArray[1]);
        break;
      case 70: // Tecla 'F' 
        playSound(scaleArray[2]);
        break;
        case 192: //Tecla 'Ñ'
        playSound(scaleArray[6]);
        break;
        case 76: //Tecla 'L'
        playSound(scaleArray[5]);
        break;
        case 75: //Tecla 'K'
        playSound(scaleArray[4]);
        break;
        case 74: //Tecla 'J'
        playSound(scaleArray[3]);
        break;
    }
  });

  function playSound(sound) {
    sound.playbackRate=2;
    sound.volume=0.2;
    sound.currentTime = 0;
    sound.play();
  }




