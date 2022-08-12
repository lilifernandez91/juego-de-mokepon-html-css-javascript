`use strict`;

//Obtener elementos del html y asignarlos a la constante
const botonMascotas = document.querySelector (`.boton-mascotas`)

const spanMascotaJugador = document.querySelector(".mascota-jugador")
const spanMascotaEnemigo = document.querySelector(".mascota-enemigo")

const sectionMensajes = document.getElementById("resultado")

const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

const spanVidasJugador = document.querySelector(".vidas-jugador")
const spanVidasEnemigo = document.querySelector(".vidas-enemigo")

const botonReiniciar = document.querySelector(".boton-reiniciar")

const sectionSeleccionarAtaque = document.querySelector(".seleccionar-ataque")
const sectionSeleccionarMascota = document.querySelector(".seleccionar-mascota")

const contenedorTarjetas = document.getElementById("contenedorTarjetas")

const contenedorAtaques = document.getElementById("contenedorAtaques")

//variables que se les puede modificar su valor
let mokepones = []
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let ataqueJugador
let ataquesEnemigo
let mascotaJugador
let ataquesMokepon
let botonFuego 
let botonAgua 
let botonTierra 
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon{
    constructor(nombre,foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './images/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo', './images/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './images/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
 {nombre: '💧', class: 'boton-agua'},
 {nombre: '💧', class: 'boton-agua'},
 {nombre: '💧', class: 'boton-agua'},
 {nombre: '🌱', class: 'boton-tierra'},
 {nombre: '🔥', class: 'boton-fuego'},
)

capipepo.ataques.push(
    {nombre: '🌱', class: 'boton-tierra'},
    {nombre: '🌱', class: 'boton-tierra'},
    {nombre: '🌱', class: 'boton-tierra'},
    {nombre: '💧', class: 'boton-agua'},
    {nombre: '🔥', class: 'boton-fuego'},
   )

ratigueya.ataques.push(
    {nombre: '🔥', class: 'boton-fuego'},
    {nombre: '🔥', class: 'boton-fuego'},
    {nombre: '🔥', class: 'boton-fuego'},
    {nombre: '💧', class: 'boton-agua'},
    {nombre: '🌱', class: 'boton-tierra'},
   )

   mokepones.push(hipodoge, capipepo, ratigueya)

   //Forma en la que podemos iterar por cuantos elementos existan en un arreglo
   mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
            <input type="radio" name="mascota" id=${mokepon.nombre}>
            <label for=${mokepon.nombre} class="tarjeta-de-mokepon">
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt="Imagen de ${mokepon.nombre}">
            </label>
    `
    //seleccionamos un contenedor del html y le inyectamos el valor de la estructura
    contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
   })

const handleBotonMascotas = () => {
    
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else{
        alert("Selecciona una mascota")
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

const extraerAtaques = (mascotaJugador) => {
    let ataques
    
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

const mostrarAtaques = (ataques) => {

ataques.forEach((ataque) =>{
    ataquesMokepon = `
    <button class="${ataque.class} boton-de-ataque">${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon
})
    botonFuego = document.querySelector(".boton-fuego")
    botonAgua = document.querySelector(".boton-agua")
    botonTierra = document.querySelector(".boton-tierra")

    botonFuego.addEventListener(`click`, handleBotonFuego)
    botonAgua.addEventListener(`click`, handleBotonAgua)
    botonTierra.addEventListener(`click`, handleBotonTierra)
}

const seleccionarMascotaEnemigo = () =>{
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
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

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    botonReiniciar.style.display = "block"
}

const handleBotonReiniciar = () => {
    location.reload()
}

sectionSeleccionarAtaque.style.display = "none"
botonReiniciar.style.display = "none"

const aleatorio = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)+ min)
   }
   
botonMascotas.addEventListener(`click`, handleBotonMascotas)
botonReiniciar.addEventListener(`click`, handleBotonReiniciar)
