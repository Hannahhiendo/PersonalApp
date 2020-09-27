const background = document.getElementById('Background')
const thumbnail = document.getElementById('Thumbnail')
const Song = document.getElementById('Song')

const songartist = document.getElementById('song-artist')
const songtitle = document.getElementById('song-title')

const rangeslider = document.getElementById('range-slider')
const playPause = document.getElementById('Play-Pause')


const nextBtn = document.getElementById('Next')
const previousBtn = document.getElementById('Previous')

nextBtn.onclick = nextSong

previousBtn.onclick = previousSong


let artists = [
    'Harry styles',
    'Bts'
]

let titles = [
    'Watermelon Sugar',
    'Dynamite'
]
let songs = [
    './Assets/music/Watermelon Sugar - Harry Styles.mp3',
    './Assets/music/Dynamite - BTS.mp3'
]
let covers = [
    './Assets/cover/Fine Line album.jpg',
    './Assets/cover/dynamite.jpeg'
]

let playing = true

function PlayPauseFunc() {
    if(playing){
        playPause.src = './Assets/icon/pause.png'
        Song.play()
    }
    else{
        playPause.src = './Assets/icon/play-button.png'
        Song.pause()
    }
    playing = !playing
}

let songIndex = 0

function nextSong(){

    console.log('in next')

    songIndex++;
    if(songIndex >= songs.length){
        songIndex = 0;

    } 
    Song.src = songs[songIndex]
    Thumbnail.src = covers[songIndex]
    Background.src = covers[songIndex]

    document.getElementById('song-artist').innerHTML = artists[songIndex]
    document.getElementById('song-title').innerHTML = titles[songIndex]


    playing = true
    PlayPauseFunc()
    
}

function previousSong(){

    console.log('in previous')
    songIndex--;
    if(songIndex <= 0){
        songIndex = 0;
    } 

    Song.src = songs[songIndex]
    Thumbnail.src = covers[songIndex]
    Background.src = covers[songIndex]

    document.getElementById('song-artist').innerHTML = artists[songIndex]
    document.getElementById('song-title').innerHTML = titles[songIndex]


    playing = true
    PlayPauseFunc()
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds/60)
    seconds = seconds % 60
    if (seconds < 10){
        seconds = `0${seconds}`
    }
    return `${minutes}:${seconds}`
}

rangeslider.onchange = () => {
    Song.currentTime = rangeslider.value
}

function updateProgressValue() {
    rangeslider.max = Song.duration
    rangeslider.value = Song.currentTime

    document.querySelector('.currenttime').innerHTML = formatTime(Math.floor(Song.currentTime))

    if (document.querySelector('.durationtime').innerHTML == "NaN:NaN"){
        document.querySelector('.durationtime').innerHTML = '0:00'
    }
    else {
        document.querySelector('.durationtime').innerHTML = formatTime(Math.floor(Song.duration))

    }
}

setInterval(updateProgressValue, 500);