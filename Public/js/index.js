const audioTest = "./sounds/hiHat.wav";
const hiHat = new Audio("./sounds/hiHat.wav");
const redoblante = new Audio("./sounds/redoblante.wav");
const crash = new Audio("./sounds/crash.wav");
const tom1 = new Audio("./sounds/tom1.wav");
const tom2 = new Audio("./sounds/tom2.wav");
const tom3 = new Audio("./sounds/tom3.wav");
const tom4 = new Audio("./sounds/tom4.wav");
const bombo = new Audio("./sounds/bombo.wav");
const soundsDrums = [crash, tom4, hiHat, tom3, tom1, tom2, redoblante, bombo];

const circleTom1 = document.querySelector("svg #tom1")
const circleTom2 = document.querySelector("svg #tom2")
const circleTom3 = document.querySelector("svg #tom3")
const circleTom4 = document.querySelector("svg #tom4")
const circleHiHat = document.querySelector("svg #hiHat")
const circleCrash = document.querySelector("svg #crash")
const circleBombo = document.querySelector("svg #bombo")
const circleRedoblante = document.querySelector("svg #redoblante")



document.addEventListener("keydown", function (event) {
  let keyCode = event.keyCode || event.which;

  switch (keyCode) {
    case 65: // Tecla 'A'
      playSound(tom1);
      circleTom1.classList.add("playing")
        setTimeout( () =>{
        circleTom1.classList.remove("playing")
      },50)
      console.log(circleTom1);
      break;
    case 83: // Tecla 'S'
      playSound(tom2);
      circleTom2.classList.add("playing")
      setTimeout( () =>{
        circleTom2.classList.remove("playing")
      },50)
      break;
    case 68: // Tecla 'D'
      playSound(tom3);
      circleTom3.classList.add("playing")
      setTimeout( () =>{
        circleTom3.classList.remove("playing")
      },50)
      break;
    case 70: // Tecla 'F'
      playSound(tom4);
      circleTom4.classList.add("playing")
      setTimeout( () =>{
        circleTom4.classList.remove("playing")
      },50)
      break;
    case 90: //Tecla 'Z'
      playSound(crash);
      circleCrash.classList.add("playing")
      setTimeout( () =>{
        circleCrash.classList.remove("playing")
      },50)
      break;
    case 88:  //Tecla 'X'
      playSound(hiHat); 
      circleHiHat.classList.add("playing")
      setTimeout( () =>{
        circleHiHat.classList.remove("playing")
      },50)
      break;
    case 67:  //Tecla 'C'
      playSound(bombo); 
      circleBombo.classList.add("playing")
      setTimeout( () =>{
        circleBombo.classList.remove("playing")
      },50)
      break;
    case 86:   //Tecla 'V'
      playSound(redoblante);
      circleRedoblante.classList.add("playing")
      setTimeout( () =>{
        circleRedoblante.classList.remove("playing")
      },50)
      break;
  }
});

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

document.querySelectorAll("#drums a").forEach((x, index) => {
  x.addEventListener("click", function (event) {
    event.preventDefault();
    let target = soundsDrums[index]
    target.playbackRate = 2;
    target.play();

    if (target.currentTime > 0) {
      target.pause();
      target.currentTime = 0;
      target.play();
    }
  });
});