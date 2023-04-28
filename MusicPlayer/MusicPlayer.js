
//variables 
const musicContainer = document.querySelector(".music-container")
const playBtn = document.querySelector("#play")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const audio = document.querySelector("#audio")
const title = document.querySelector("#title")
const cover = document.querySelector("#cover")
const progress = document.querySelector(".progress")
const progressContainer = document.querySelector(".progress-container")

//song titles
const songs = ["L'Indecis - Soulful", "MF DOOM - Saffron", "Nujabes - Aruarian Dance"]

//keep track of songs
let songIndex = 0

//Initially load song info to DOM
loadSong(songs[songIndex])

//Function for running songs in DOM
function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

//Event Listeners
function playSong(){
    musicContainer.classList.add("play")
    //changes button type from pause to play and vice versa
    playBtn.querySelector("i.fas").classList.remove("fa-solid fa-play")
    playBtn.querySelector("i.fas").classList.add("fa-pause")

    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove("play")
    //changes button type from pause to play and vice versa
    playBtn.querySelector("i.fas").classList.add("fa-solid fa-play")
    playBtn.querySelector("i.fas").classList.remove("fa-pause")

    audio.pause()
}

playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play")

    if(isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
})

//Change song events
//prevBtn.addEventListener("click", prevSong)
//nextBtn.addEventListener("click", nextSong)