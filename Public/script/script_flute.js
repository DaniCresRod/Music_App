const noteDo = new Audio("Resources/Audio/do.m4a");
const noteRe = new Audio("Resources/Audio/re.m4a");
const noteMi = new Audio("Resources/Audio/mi.m4a");
const noteFa = new Audio("Resources/Audio/fa.m4a");
const noteSol = new Audio("Resources/Audio/sol.m4a");
const noteLa = new Audio("Resources/Audio/la.m4a");
const noteSi = new Audio("Resources/Audio/si.m4a");
const noteDoH = new Audio("Resources/Audio/do_mayor.m4a");

const scaleArray=[noteSi, noteLa, noteSol, noteFa, noteMi, noteRe, noteDo, noteDoH];

document.querySelectorAll("#Flute a").forEach( (x,index)=>{ 
    
    x.addEventListener("click", function(event) {
        event.preventDefault();
        
        NoteChange();
        
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

  let mySound=null;
  let myText=null;
  KeyChange();

  switch (keyCode) {      
    case 83: // Tecla 'S'
      mySound=scaleArray[0];
      myText=0;      
      break;
    case 68: // Tecla 'D'
      mySound=scaleArray[1]; 
      myText=1;      
      break;
    case 70: // Tecla 'F' 
      mySound=scaleArray[2];
      myText=2;
      break;
    case 74: //Tecla 'J'
      mySound=scaleArray[3];
      myText=3;
      break;
    case 75: //Tecla 'K'
      mySound=scaleArray[4];
      myText=4;
      break;
    case 76: //Tecla 'L'
      mySound=scaleArray[5];
      myText=5;
      break;
    case 192: //Tecla 'Ñ'
      mySound=scaleArray[6];
      myText=6;
      break;
      case 65: //Tecla 'A' Do sostenido, solo teclado
      mySound=scaleArray[7];
      myText=6;
      break;

    default:
      break;   
  }

    if(mySound!=null){
      document.querySelector("#flute_photo a:nth-of-type("+(myText+1)+") text").setAttribute("fill", "black");
      playSound(mySound);

      mySound.addEventListener("ended", function(){
        document.querySelector("#flute_photo a:nth-of-type("+(myText+1)+") text").setAttribute("fill", "white");
      });
    }    

});

function playSound(sound) {
  sound.playbackRate=2;
  sound.volume=0.2;
  sound.currentTime = 0;
  sound.play();
}

let arrayKbKeys=["S", "D","F","J","K","L","Ñ"];
let arrayNotes=["SI","LA","SOL","FA","MI","RE","DO"];
let arrayXPosText=[477, 475, 466, 475, 475, 475, 470];

function KeyChange(){
  for(var i=0; i<arrayKbKeys.length; i++){
    document.querySelector("#flute_photo a:nth-of-type("+(i+1)+") text").innerHTML=arrayKbKeys[i];
    document.querySelector("#flute_photo a:nth-of-type("+(i+1)+") text").setAttribute("x", "485");
  }
}

function NoteChange(){
  for(var i=0; i<arrayKbKeys.length; i++){
    document.querySelector("#flute_photo a:nth-of-type("+(i+1)+") text").innerHTML=arrayNotes[i];
    document.querySelector("#flute_photo a:nth-of-type("+(i+1)+") text").setAttribute("x", arrayXPosText[i]);
  }
}

let instrumentArea = document.getElementById("sausage_fingers");

document.querySelector("#interactive_area img").addEventListener("click", function(){
    if(instrumentArea.classList.contains("show_sausages")){
        instrumentArea.classList.remove("show_sausages");
    }
    else{
        instrumentArea.classList.add("show_sausages");
    }
});

scaleArray.forEach((x,index)=>function(){
document.querySelector("#sausage_fingers ul").appendChild(document.createElement("li")).innerHTML="ya";
});
  


