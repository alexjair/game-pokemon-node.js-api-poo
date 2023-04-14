//---Declaracion de variables.

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

sectionReiniciar.style.display = 'none'

const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')

const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

//contenedor de nuestros objetos, todos los pokemones creados. 
let mokepones = []
let opcionDeMokepones

//let arrayAtaquesJugador

let vidasJugador = 3
let vidasEnemigo = 3

let inputHipodoge
let inputCapipepo
let inputRatigueya

let botonTierra
let botonFuego
let botonAgua

let arrayBtnAtaqueGrup = []
let arrayAtaquesJugador = []
let arrayAtaqueEnemigo = []

let mascotaJugadorSelecionado
let ataqueMokepon
let ataqueMokeponEnemigo

let indexAtaquesJugador
let indexAtaquesEnemigo

let victoriasJugador = 0
let victoriasEnemigo = 0

//Iniciamos la Clase de los Pokemoes
class Mokepon {
    //variables
    //..

    constructor(
        //variables
        nombre, 
        foto, 
        vida
        ) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques =[]
    }
}

//Inicializamos los objetos, los 3 tipos de pokemon que vana jugar
let hipodoge = new Mokepon('Hipodoge', './assets/blue_po_2_portada.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/gree_po_2_portada.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/fire_po_2_portada.png', 5)

//Definiendo los arreglos en los pokemones
hipodoge.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
    )
capipepo.ataques.push(
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    )
ratigueya.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🌱',id:'boton-tierra'},
    )

mokepones.push(hipodoge, capipepo, ratigueya);
console.log(hipodoge);

/************[ Inicia del Juego ]***************/
function iniciarJuego() {
    console.log("fun --> iniciarJuego()");

    sectionSeleccionarAtaque.style.display = 'none'

    //recorrer los pokemon creados, para mostrar en la plantalla de seleccion
    let vHtml = "";
    mokepones.forEach((mokepon) => {

        opcionDeMokepones = `
            <input 
                type="radio" 
                name="mascota" 
                id="${mokepon.nombre}" 
            />
            <label 
                class="tarjeta-de-mokepon" 
                for="${mokepon.nombre}" 
            >
                <p>${mokepon.nombre}</p>
                <img src="${mokepon.foto}" alt="${mokepon.nombre}">
            </label>
        `
        vHtml = vHtml + opcionDeMokepones;
    })

    //Enviar los obj. pokemons a DOM
    contenedorTarjetas.innerHTML = vHtml;
    //console.log(vHtml);
    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')
        
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

/*
function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
*/

function seleccionarMascotaJugador() {
    console.log("fun --> seleccionarMascotaJugador()");

    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    mascotaJugadorSelecionado = "";
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugadorSelecionado = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugadorSelecionado = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugadorSelecionado = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }
    
    //
    funExtraerAtaques(mascotaJugadorSelecionado);
    //Selecciona al enemigo de forma automatica.
    seleccionarMascotaEnemigo()
}

/*
function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }
    seleccionarMascotaEnemigo()
}
*/

function funExtraerAtaques(mascotaJugadorSelecionado){
    console.log("fun --> funExtraerAtaques(mascotaJugadorSelecionado)");

    let ataques;
    //obetener atakes
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugadorSelecionado === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    console.log(ataques);
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    console.log("fun --> mostrarAtaques(ataques)");

    vHtml = "";
    ataques.forEach((ataque) => {
        ataqueMokepon = `
            <button id="${ataque.id}" class="boton-de-ataque clsBtnGroupAraque">${ataque.nombre}</button>
        `
        vHtml = vHtml + ataqueMokepon;
    })

    contenedorAtaques.innerHTML = vHtml;
    
    botonTierra = document.getElementById('boton-tierra')
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')

    arrayBtnAtaqueGrup = document.querySelectorAll('.clsBtnGroupAraque')

    console.log("show --> .clsBtnGroupAraque");
    console.log(arrayBtnAtaqueGrup);
    
    //inciar los eventos para los ataques
    //botonFuego.addEventListener('click', ataqueFuego)
    //botonAgua.addEventListener('click', ataqueAgua)
    //botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaEnemigo() {
    console.log("fun --> seleccionarMascotaEnemigo()");

    //Obentenmos el ID array del los pokemones;  
    let mascotaAleatoria = aleatorio(0,mokepones.length - 1)
    
    //selec. pk enemigo
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
    //selec. ataques enemigo
    ataqueMokeponEnemigo = mokepones[mascotaAleatoria].ataques;
    console.log(ataqueMokeponEnemigo);
    //llamar agregar los eventos a ataque
    secuenciaAtaque()
}

/*
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}
*/

function secuenciaAtaque(){
    console.log("fun --> secuenciaAtaque()");

    //console.log(arrayBtnAtaqueGrup);

    arrayBtnAtaqueGrup.forEach((boton) => {
        console.log("Botones de Ataque --> arrayBtnAtaqueGrup.forEach");
        //console.log(boton);
        boton.addEventListener('click', (e) => {
            console.log("event tipo atack --> boton.addEventListener(..");
            //console.log(e.target)
            console.log("Mostrar Array del ataque del jugador");
            console.log(e.target.textContent)
            if (e.target.textContent === '🔥'){
                arrayAtaquesJugador.push('FUEGO')
                console.log(arrayAtaquesJugador);
                boton.style.background = 'orange'
            }else if (e.target.textContent === '💧'){
                arrayAtaquesJugador.push('AGUA')
                console.log(arrayAtaquesJugador);
                boton.style.background = 'blue'
            }else{
                arrayAtaquesJugador.push('TIERRA')
                console.log(arrayAtaquesJugador);
                boton.style.background = 'green'
            }

            //inicar el ataque del enemigo
            ataqueAleatorioEnemigo();
        })
    });

    
}


function ataqueAleatorioEnemigo() {
    console.log("fun --> ataqueAleatorioEnemigo()");

    let ataqueAleatorio = aleatorio(0,ataqueMokeponEnemigo.length-1)

    if (
        ataqueAleatorio == 0 || 
        ataqueAleatorio == 1
    ) {
        arrayAtaqueEnemigo.push('FUEGO')
    
    } else if (
        ataqueAleatorio == 3 || 
        ataqueAleatorio == 4
    ) {
        arrayAtaqueEnemigo.push('AGUA')

    } else {
        arrayAtaqueEnemigo.push('TIERRA')
    }

    console.log("Mostrar Array del ataque enemigo");
    console.log(arrayAtaqueEnemigo);
    iniciarPelea()
}

function iniciarPelea(){
    console.log("fun --> iniciarPelea()");

    if(arrayAtaquesJugador.length === 5){
        console.log("--> --> combate()");
        combate()
    }
}

function funCombate_resultado(Jugador,Enemigo){
    console.log("fun --> funCombate_resultado(vAtaqueJugador,vAtaqueEnemigo)");

    indexAtaquesEnemigo = arrayAtaqueEnemigo[Enemigo]
    indexAtaquesJugador = arrayAtaquesJugador[Jugador]
    console.log(indexAtaquesJugador + " -- vs -- " + indexAtaquesEnemigo);
}

function combate() {
        

    for (let index = 0; index < arrayAtaquesJugador.length; index++) {
        if (arrayAtaquesJugador[index] === arrayAtaqueEnemigo[index]) {
            funCombate_resultado(index,index);    
            crearMensaje("EMPATE");
        } else if (arrayAtaquesJugador[index] === 'FUEGO' && arrayAtaqueEnemigo[index] === 'TIERRA') {
            funCombate_resultado(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (arrayAtaquesJugador[index] ==='AGUA' && arrayAtaqueEnemigo[index] === 'FUEGO') {
            funCombate_resultado(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (arrayAtaquesJugador[index] === 'TIERRA' && arrayAtaqueEnemigo[index] === 'AGUA') {
            funCombate_resultado(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else {
            funCombate_resultado(index, index);
            crearMensaje("PERDISTE");
            victoriasEnemigo++;
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }
    }
    /*
    
    if(arrayAtaqueEnemigo == arrayAtaquesJugador) {
        crearMensaje("EMPATE")
    } else if(arrayAtaquesJugador == 'FUEGO' && arrayAtaqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(arrayAtaquesJugador == 'AGUA' && arrayAtaqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(arrayAtaquesJugador == 'TIERRA' && arrayAtaqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    */
    revisarVidas()
}

/*
function ataqueFuego() {
    arrayAtaquesJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    arrayAtaquesJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    arrayAtaquesJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
*/

function revisarVidas() {
    console.log("fun --> revisarVidas()");

    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!");
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)");
    } else {
        crearMensajeFinal('Lo siento, perdiste :(');
    }
}

function crearMensaje(resultado) {
    console.log("fun --> crearMensaje()");

    console.log(resultado);
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaquesJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaquesEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    console.log("fun --> resultadoFinal()");
    
    console.log(resultadoFinal);

    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    console.log("fun --> reiniciarJuego()");
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
