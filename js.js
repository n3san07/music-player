let wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "violet",
  progressColor: "purple",
  barWidth: 4,
  height: 90,
  barRadius: 4,
  responsive: true,
});

let count = 0;
let obj = [
  {
    id: 1,
    art: "hani",
    songName: "1",
    src: "media/Good-Day-Wake-Up-NEFFEX.mp3",
  },
  {
    id: 2,
    art: "heba",
    songName: "2",
    src: "media/Not Afraid .mp3",
  },
  {
    id: 2,
    art: "heba",
    songName: "3",
    src: "media/Not Afraid .mp3",
  },
  {
    id: 2,
    art: "heba",
    songName: "4",
    src: "media/Not Afraid .mp3",
  },
  {
    id: 2,
    art: "heba",
    songName: "5",
    src: "media/Not Afraid .mp3",
  },
  {
    id: 2,
    art: "heba",
    songName: "6",
    src: "media/Not Afraid .mp3",
  },
  {
    id: 2,
    art: "heba",
    songName: "7",
    src: "media/Not Afraid .mp3",
  },
];
let btn = document.getElementById("btn");
let art = document.getElementById("art");
let songName = document.getElementById("name");
let src;
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prevs");

window.addEventListener("load", start);

function start() {
  art.textContent = obj[count].art;
  songName.textContent = obj[count].songName;
  src = obj[count].src;
  wavesurfer.load(src);
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

function next() {
  btn.src = "media/play.png";
  if (count < obj.length - 1) {
    count++;
  } else {
    count = 0;
  }
  start();
}
function prev() {
  btn.src = "media/play.png";
  if (count <= 0) {
    count = obj.length - 1;
  } else {
    count--;
  }
  start();
}

btn.addEventListener("click", play);

function play() {
  if (btn.src.includes("play.png")) {
    btn.src = "media/pause.png";
  } else {
    btn.src = "media/play.png";
  }

  wavesurfer.playPause();
}

wavesurfer.on("finish", stop);

function stop() {
  wavesurfer.stop();
  btn.src = "media/play.png";
}
