const music = [
    "bensound-acousticbreeze.mp3",
    "bensound-goinghigher.mp3",
    "bensound-littleidea.mp3",
    "bensound-memories.mp3",
    "bensound-summer.mp3"
]
const player = document.getElementById("player");

const createMusicList = () => {
    const list = document.createElement("ol")

    for(let i = 0; i < music.length; i++){
        const item = document.createElement("li")
        item.appendChild(document.createTextNode(music[i]))
         list.appendChild(item)
    }
  return list
}


 const musicList = document.getElementById("musicList")
 musicList.appendChild(createMusicList());

 const links = document.querySelectorAll("li"); 
for(const link of links){
    link.addEventListener("click", setMusic);
}

function setMusic(e){
    document.querySelector("#headphone").classList.remove("pulse")
   // const clickedItem = e.target
    const itemSrc = document.getElementById("source")
    itemSrc.src = "music/" + e.target.innerText;

 
    player.load();
    player.play();

    document.getElementById("currentlyPlaying").innerText = `Now playing: ${e.target.innerText} `;
    document.querySelector("#headphone").classList.add("pulse")
}; 

function playMusic(){
    if(player.readyState){
        player.play();
    }
}

function pauseMusic(){
    player.pause();
}

const inputSlider = document.getElementById("volumeSlider");
inputSlider.oninput = function (e){
    const volume = e.target.value;
    player.volume = volume;
}

function progressUpdate(){
   if (player.currentTime > 0){
    const progressBar = document.getElementById("progress")
    progressBar.value = (player.currentTime/ player.duration) * 100

   }
  
}