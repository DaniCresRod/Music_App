let hiHat = new Audio("./sounds/hiHat.wav");
let redoblante = new Audio("./sounds/redoblante.wav");
let crash = new Audio("./sounds/crash.wav");
let tom1 = new Audio("./sounds/tom1.wav");
let tom2 = new Audio("./sounds/tom2.wav");
let tom3 = new Audio("./sounds/tom3.wav");
let tom4 = new Audio("./sounds/tom4.wav");
let bombo = new Audio("./sounds/bombo.wav");
let soundsDrums = [crash, tom4, hiHat, tom3, tom1, tom2, redoblante, bombo];

document.addEventListener("keydown", function (event) {
  let keyCode = event.keyCode || event.which;

  switch (keyCode) {
    case 65: // Tecla 'A'
      playSound(tom1);
      break;
    case 83: // Tecla 'S'
      playSound(tom2);
      break;
    case 68: // Tecla 'D'
      playSound(tom3);
      break;
    case 70: // Tecla 'F'
      playSound(tom4);
      break;
    case 90: //Tecla 'Z'
      playSound(crash);
      break;
    case 88:  //Tecla 'X'
      playSound(hiHat); 
      break;
    case 67:  //Tecla 'C'
      playSound(bombo); 
      break;
    case 86:   //Tecla 'V'
      playSound(redoblante);
      break;
  }
});

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

document.querySelectorAll("#drums a").forEach((x, index) => {
  x.addEventListener("click", function (evento) {
    evento.preventDefault();
    let target = soundsDrums[index];
    target.playbackRate = 2;
    target.play();

    if (target.currentTime > 0) {
      target.pause();
      target.currentTime = 0;
      target.play();
    }
  });
});

document.querySelectorAll("#drums a").forEach((x, index) => {
  x.addEventListener("onKeyDown", function (event) {
    event.preventDefault();
    let target = soundsDrums[index];
    target.playbackRate = 2;
    target.play();
  });
});
