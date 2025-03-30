// Canciones
const songList = [
    {
        title: "1. Toulumne \n- Eddie Vedder \n ",
        file: "EddieVedderToulumne.mp3",
        cover: "1.EddieVedderToulomne.jpg",
        descripcion: "Toulumne \n Eddie Vedder \n 2007",
       // enlace: "Toulumne_Youtube"
        /*Agregar una miniatura a un lado d la canción*/
    },
    {
        title: "2. Rose - James Horner",
        file: "JamesHornerRose.mp3",
        cover: "2.JamesHornerRose.jpg",
        descripcion: "Rose \n James Horner \n 1997",
      //  enlace: "Rose.html"
    },
    {
        title: "3. Nemo egg - Thomas Newman",
        file: "ThomasNewmanNemoEggMainTitle.mp3",
        cover: "3.ThomasNewmanNemoEgg.jpg",
        descripcion: "Nemo Egg \n Thomas Newman \n 2003 ",
     //   enlace: "Nemoegg.html"
    },
]

// Canción actual
let actualSong = null

// Captura de elementos del DOM para trabajar con JS
const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title")
//
const descripcion = document.getElementById("descripcion")
//
//const enlace = document.getElementById("enlace")
//
const play = document.getElementById("play")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
progressContainer.addEventListener("click", setProgress)

// Escuchar el elemento AUDIO
audio.addEventListener("timeupdate", updateProgress)

// Escuchar clicks en los controles
play.addEventListener("click", () => {
    if (audio.paused) {
        playSong()
    } else {
        pauseSong()
    }
})

next.addEventListener("click", () => nextSong())
prev.addEventListener("click", () => prevSong())

// Cargar canciones y mostrar el listado
function loadSongs() {
    songList.forEach((song, index) => {
        // Crear li
        const li = document.createElement("li")
        // Crear a
        const link = document.createElement("a")
        // Hidratar a
        link.textContent = song.title
        link.href = "#"
        /* Descripcion
        link.textContent=song.descripcion
        link.href ="#"
        */
        // Escuchar clicks
        link.addEventListener("click", () => loadSong(index))
        // Añadir a li
        li.appendChild(link)
        // Aañadir li a ul
        songs.appendChild(li)
    })
}

// Cargar canción seleccionada
function loadSong(songIndex) {                /*LLamando a función song index*/
    if (songIndex !== actualSong) {               /*Comparación en reproducción actual de la pista*/
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex
        audio.src = "./audio/" + songList[songIndex].file
        audio.play()
        playSong()
        changeSongtitle(songIndex)
        changeCover(songIndex)


    }
}

// Actualizar barra de progreso de la canción
function updateProgress(event) {
    const { duration, currentTime } = event.srcElement
    const percent = (currentTime / duration) * 100
    progress.style.width = percent + "%"
}

// Hacer la barra de progreso clicable
function setProgress(event) {
    const totalWidth = this.offsetWidth
    const progressWidth = event.offsetX
    const current = (progressWidth / totalWidth) * audio.duration
    audio.currentTime = current
}

// Actualiar controles  
function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    } else {
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}

9

// Reproducir canción
function playSong() {
    if (actualSong !== null) {
        audio.play()
        updateControls()
    }
}

// Pausar canción
function pauseSong() {
    audio.pause()
    updateControls()
}

// Cambiar clase activa
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a")
    if (lastIndex !== null) {
        links[lastIndex].classList.remove("active")
    }
    links[newIndex].classList.add("active")
}

// Cambiar el cover de la canción
function changeCover(songIndex) {
    cover.src = "./img/" + songList[songIndex].cover
}

// Cambiar el título de la canción
function changeSongtitle(songIndex) {
    title.innerText = songList[songIndex].title
}
//Cambio de descripción
function changeSongtitle(songIndex) {
    descripcion.innerText = songList[songIndex].descripcion
}
//Agregarenlace
/*function changeSongtitle(songIndex) {
  enlace.innerText = songList[songIndex].enlace
}*/
// Anterior canción
function prevSong() {
    if (actualSong > 0) {
        loadSong(actualSong - 1)
    } else {
        loadSong(songList.length - 1)
    }
}

// Siguiente canción
function nextSong() {
    if (actualSong < songList.length - 1) {
        loadSong(actualSong + 1)
    } else {
        loadSong(0)
    }
}

// Lanzar siguiente canción cuando se acaba la actual
audio.addEventListener("ended", () => nextSong())

// GO!
loadSongs()