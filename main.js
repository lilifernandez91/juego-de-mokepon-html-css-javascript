`use strict`;

const botonMascotas = document.querySelector (`.boton-mascotas`)
const inputHipodoge = document.getElementById("hipodoge")
const inputCapipepo = document.getElementById("capipepo")
const inputRatigueya = document.getElementById("ratigueya")
const spanMascotaJugador = document.querySelector(".mascota-jugador")
const spanMascotaEnemigo = document.querySelector(".mascota-enemigo")
const botonFuego = document.querySelector(".boton-fuego")
const botonAgua = document.querySelector(".boton-agua")
const botonTierra = document.querySelector(".boton-tierra")
const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const spanVidasJugador = document.querySelector(".vidas-jugador")
const spanVidasEnemigo = document.querySelector(".vidas-enemigo")
const botonReiniciar = document.querySelector(".boton-reiniciar")
botonReiniciar.style.display = "none"
const sectionSeleccionarAtaque = document.querySelector(".seleccionar-ataque")
sectionSeleccionarAtaque.style.display = "none"
const sectionSeleccionarMascota = document.querySelector(".seleccionar-mascota")

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

const handleBotonMascotas = () => {
    
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    }else{
        alert("Selecciona una mascota")
    }
    seleccionarMascotaEnemigo()
}

const seleccionarMascotaEnemigo = () =>{
    let mascotaAleatoria = aleatorio(1,3)

    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }else{
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

const handleBotonFuego = () => {
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}

const handleBotonAgua = () => {
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}

const handleBotonTierra = () => {
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
}

const ataqueAleatorioEnemigo = () => {
    let ataqueAleatorio = aleatorio (1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego"
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = "Agua"
    }else {
        ataqueEnemigo = "Tierra"
    }
    combate()
}

const crearMensaje = (resultado) => {
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo    

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

const combate = () => {
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

const revisarVidas = () => {
    if (vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! GANASTE :)")
    }else if (vidasJugador == 0){
        crearMensajeFinal("LO SIENTO! PERDISTE :(")
    }
}

const crearMensajeFinal = (resultadoFinal) => {
    sectionMensajes.innerHTML = resultadoFinal

    const botonFuego = document.querySelector(".boton-fuego")
    botonFuego.disabled = true
    const botonAgua = document.querySelector(".boton-agua")
    botonAgua.disabled = true
    const botonTierra = document.querySelector(".boton-tierra")
    botonTierra.disabled = true

    botonReiniciar.style.display = "block"
}

const handleBotonReiniciar = () => {
    location.reload()
}

const aleatorio = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)+ min)
   }
   
botonMascotas.addEventListener(`click`, handleBotonMascotas)
botonFuego.addEventListener(`click`, handleBotonFuego)
botonAgua.addEventListener(`click`, handleBotonAgua)
botonTierra.addEventListener(`click`, handleBotonTierra)
botonReiniciar.addEventListener(`click`, handleBotonReiniciar)
