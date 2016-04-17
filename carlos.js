var audio = new Audio('sounds/doorbell.mp3');

function playDoorbellSound() {
  audio.currentTime=0;
  audio.play();
}