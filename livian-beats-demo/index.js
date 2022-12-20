const template = document.createElement('template');
template.innerHTML = `
<div class="header">
    <a href="index.html"><img class="logo" src="images/livan.png" alt=""></a>
    <ul class="nav">
        <li><a href="index.html" class="links">Home</a></li>
        <li><a href="#" class="links">Beats</a></li>
        <li><a href="#" class="links">Kits</a></li>
        <li><a href="#" class="links">Contact</a></li>
    </ul>
    <div class="dropMenu">
      <div id="sidebar">
          <div class="toggle-btn" onclick="myFunction(this)">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          </div>

          <ul id="menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="">Beats</a></li>
          <li><a href="">Sound Kits</a></li>
          <li><a href="#">Contact</a></li>
          </ul>
      </div>
    </div>
</div>
`


function myFunction(x) {
  x.classList.toggle('change');
  document.getElementById('sidebar').classList.toggle('active');
}

document.body.appendChild(template.content);


var submitted=false;

document.documentElement.onload = function(){
  document.getElementById("loader").style.display = "block";
};

window.onload = function(){
  document.getElementById("loader").style.display = "none";
};

// const musicContainer = document.getElementById('music-container');
// const playBtn = document.getElementById('play');

// const audio = document.getElementById('audio');
// const progress = document.getElementById('progress');
// const progressContainer = document.getElementById('progress-container');
// const title = document.getElementById('title');
// const cover = document.getElementById('cover');
// const currTime = document.querySelector('#currTime');
// const durTime = document.querySelector('#durTime');


// function loadSong() {
//   audio.src = `music/YG - My Nigga ft. Jeezy, Rich Homie Quan.mp3`;
//   cover.src = `images/YG - My Nigga ft. Jeezy, Rich Homie Quan.jpg`;
// }

// playBtn.addEventListener('click', () => {
//     const isPlaying = musicContainer.classList.contains('play');
  
//     if (isPlaying) {
//       pauseSong();
//     } else {
//       playSong();
//     }
// });

// function playSong() {
//     musicContainer.classList.add('play');
//     playBtn.querySelector('i.fas').classList.remove('fa-play');
//     playBtn.querySelector('i.fas').classList.add('fa-pause');
  
//     audio.play();
//   }

//   function pauseSong() {
//     musicContainer.classList.remove('play');
//     playBtn.querySelector('i.fas').classList.add('fa-play');
//     playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
//     audio.pause();
//   }

// audio.addEventListener('timeupdate', updateProgress);

// function updateProgress(e) {
//     const { duration, currentTime } = e.srcElement;
//     const progressPercent = (currentTime / duration) * 100;
//     progress.style.width = `${progressPercent}%`;
//   }

// progressContainer.addEventListener('click', setProgress);

// function setProgress(e) {
//     const width = this.clientWidth;
//     const clickX = e.offsetX;
//     const duration = audio.duration;
  
//     audio.currentTime = (clickX / width) * duration;
//   }

//   audio.addEventListener('ended', nextSong);

// function nextSong(){
//   playSong()
// }


const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const title2 = document.getElementById('titel')
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

const songs = [
    'Juice WRLD Ft Benny Blanco - Real Shit',
    'Lil Baby, Lil Durk ft Rodwave - Rich Off Pain',
    'Polo G – I Know',
    'YG - My Nigga ft. Jeezy, Rich Homie Quan',
    'Benny Hill type Beat',
    'DJ Khaled - Juice WRLD DID'
];

let songIndex = 4;

let list = document.getElementById("songList");

songs.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})

function index(){
  songIndex = 0;
  loadSong(songs[songIndex]);
  playSong()
}
function index1(){
  songIndex = 1;
  loadSong(songs[songIndex]);
  playSong()
}
function index2(){
  songIndex = 2;
  loadSong(songs[songIndex]);
  playSong()
}
function index3(){
  songIndex = 3;
  loadSong(songs[songIndex]);
  playSong()
}
function index4(){
  songIndex = 4;
  loadSong(songs[songIndex]);
  playSong()
}
function index5() {
  songIndex = 5;
  loadSong(songs[songIndex]);
  playSong()
}

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
});

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
   
    // document.getElementById('songList').style.color = 'var(--btn)'
    audio.play();
  }

  function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
    audio.pause();
  }

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
}

audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

progressContainer.addEventListener('click', setProgress);

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
  }

  audio.addEventListener('ended', nextSong);



  
  function openForm() {
    document.getElementById("loginPopup").style.display = "block";
    document.getElementById("blur").style.display = "block";
  }
  function closeForm() {
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("blur").style.display = "none";
  }

  function openFrm() {
    document.getElementById("kitsPopup").style.display = "block";
    document.getElementById("blur").style.display = "block";
  }
  function closeFrm() {
    document.getElementById("kitsPopup").style.display = "none";
    document.getElementById("blur").style.display = "none";
  }

// const square = document.querySelector(".loginPopup");
// const btnShowSquare = document.querySelector(".btnShowSquare");
// const btnHideSquare = document.querySelector(".blur");
// const crossHideSquare = document.querySelector(".closeButton");


var wantedLang = localStorage.getItem('wanted-language');
var alert = document.querySelector('#alert')

if (wantedLang == 'nederlands') {
  alert.innerText = 'LET OP! Niet alles werkt perfect aangezien dit een demo is, ook kan er maar 1 nummer gespeeld worden vanwege copyright redenen.'
}

document.querySelector('.fa-circle-xmark').addEventListener('click', close)

function close() {
  document.querySelector('.alert').classList.add('gone')
}