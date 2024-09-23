console.log("Hello world!");

const player = document.getElementById("player");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const skipBack = document.getElementById("skipBack");
const skipFor = document.getElementById("skipFor");
const audio = document.querySelector("audio");
const slider = document.querySelector("input");
const next = document.getElementById("nextTrack");
const prev = document.getElementById("previousTrack");
const title = document.getElementById("titleText");

let currentTrack = 0;
let tracks = [
  "./assets/rainforest_nature.mp3",
  "./assets/chicken_phonk.mp3",
  "./assets/well-be-right-back_macdoodleers.mp3",
  "./assets/chicken-dance_werner-thomas.mp3",
];

// click event listeners for each button

playBtn.addEventListener("click", function (asdfasdf) {
  console.log(asdfasdf);
  player.play();
  console.log(player.id);
  console.dir(player);
});

pauseBtn.addEventListener("click", function () {
  player.pause();
});

stopBtn.addEventListener("click", function () {
  // pause the playback
  player.pause();
  // set time to 0
  player.currentTime = 0;
  // currentTime
});

skipBack.addEventListener("click", function () {
  player.currentTime -= 10;
});

skipFor.addEventListener("click", function () {
  player.currentTime += 10;
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 37) {
    console.log("Left");
    player.currentTime -= 10;
  } //left
  else if (event.keyCode == 39) {
    console.log("right");
    player.currentTime += 10;
  } //right
});

slider.addEventListener("input", function (event) {
  audio.volume = event.target.value;
});

audio.addEventListener("ended", function () {
  console.log("Music Ended");
  changeTrack(1);
});

function changeTrack(trackNumber) {
  currentTrack += trackNumber;
  if (currentTrack < 0) {
    currentTrack = tracks.length - 1;
  } else if (currentTrack > tracks.length - 1) {
    currentTrack = 0;
  }
  audio.src = tracks[currentTrack];
  player.play();
}

next.addEventListener("click", function () {
  changeTrack(1);
});

prev.addEventListener("click", function () {
  changeTrack(-1);
});

function extractSongInfo() {
  let extract = tracks[currentTrack]
    .replaceAll(`./assets/`, ``)
    .replaceAll(`.mp3`, ``)
    .replaceAll(`-`, ` `)
    .replaceAll(`_`, ` by `);
  title.textContent = extract;
}

audio.addEventListener("play", function () {
  extractSongInfo();
});

audio.addEventListener("pause", function () {
  title.textContent = "no song playing";
});
