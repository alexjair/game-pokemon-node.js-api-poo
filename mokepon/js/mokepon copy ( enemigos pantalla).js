//canvas!!
const vbody = document.getElementById("idbody");

const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

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

let inputdragonite
let inputpichoto
let inputespean

let inputgengar
let inputnewtwo
let inputtiranitar


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

//canva
let mascotaJugadorObjeto
let lienzo = mapa.getContext("2d");
let intervalo
let mapaBackground = new Image()

mapaBackground.src = './assets/mapa.jpg'

//ANCHO DE PANTALLA O TRO
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 640

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa -20
}
alturaQueBuscamos = anchoDelMapa * 600 / 800
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

//node!!
let jugadorId = null

//Iniciamos la Clase de los Pokemoes
class Mokepon {
    //variables
    //..

    constructor(
         //variables
        nombre, 
        foto, 
        vida,
        fotoMapa
    ){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques =[],
        //canva!!
        this.ancho = 55, //dimenciones
        this.alto = 55,
        //antiguo
        //this.x = x, //posicion
        //this.y = y,
        //nuevo ramdom
        this.x = aleatorio(0, mapa.width - this.ancho), //posicion
        this.y = aleatorio(0, mapa.height - this.alto), //posicion
        this.mapaFoto = new Image(),
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0,    
        this.velocidadY = 0
    }

    //metodos..
    pintarMoekpon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

//Inicializamos los objetos, los 3 tipos de pokemon que vana jugar
let hipodoge = new Mokepon('Hipodoge', './assets/blue_po_2_portada.png', 5 ,'./assets/gif/Hipodoge_av.gif')
let capipepo = new Mokepon('Capipepo', './assets/gree_po_2_portada.png', 5 ,'./assets/gif/Capipepo_av.gif')
let ratigueya = new Mokepon('Ratigueya', './assets/fire_po_2_portada.png', 5 ,'./assets/gif/Ratigueya_av.gif')

let dragonite = new Mokepon('dragonite', './assets/dragonite.png', 5 ,'./assets/gif/dragonite_av.gif')
let pichoto = new Mokepon('pichoto', './assets/pichoto.png', 5 ,'./assets/gif/pichoto_av.gif')
let espean = new Mokepon('espean', './assets/espeon.webp', 5 ,'./assets/gif/espean_av.gif')

let gengar = new Mokepon('gengar', './assets/gengar.webp', 5 ,'./assets/gif/gengar_av.gif')
let newtwo = new Mokepon('newtwo', './assets/Mewtwo.webp', 5 ,'./assets/gif/newtwo_av.gif')
let tiranitar = new Mokepon('tiranitar', './assets/Tyranitar.png', 5 ,'./assets/gif/tiranitar_av.gif')

//enemigo
//let min_pos_x = 40;
//let max_pos_x = 430;
//let min_pos_y = 40;
//let max_pos_y = 590;
let hipodogeEnemigo = new Mokepon('Hipodoge', './assets/blue_po_2_portada.png', 5 ,'./assets/gif/Hipodoge_av.gif')
let capipepoEnemigo = new Mokepon('Capipepo', './assets/gree_po_2_portada.png', 5 ,'./assets/gif/Capipepo_av.gif')
let ratigueyaEnemigo = new Mokepon('Ratigueya', './assets/fire_po_2_portada.png', 5 ,'./assets/gif/Ratigueya_av.gif')

let dragoniteEnemigo = new Mokepon('dragonite', './assets/dragonite.png', 5 ,'./assets/gif/dragonite_av.gif')
let pichotoEnemigo = new Mokepon('pichoto', './assets/pichoto.png', 5 ,'./assets/gif/pichoto_av.gif')
let espeanEnemigo = new Mokepon('espean', './assets/espeon.webp', 5 ,'./assets/gif/espean_av.gif')

let gengarEnemigo = new Mokepon('gengar', './assets/gengar.webp', 5 ,'./assets/gif/gengar_av.gif')
let newtwoEnemigo = new Mokepon('newtwo', './assets/Mewtwo.webp', 5 ,'./assets/gif/newtwo_av.gif')
let tiranitarEnemigo = new Mokepon('tiranitar', './assets/Tyranitar.png', 5 ,'./assets/gif/tiranitar_av.gif')

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

//Definiendo los arreglos en los pokemones
dragonite.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
    )
pichoto.ataques.push(
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    )
espean.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🌱',id:'boton-tierra'},
    )

    //Definiendo los arreglos en los pokemones
gengar.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
    )
newtwo.ataques.push(
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    )
tiranitar.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🌱',id:'boton-tierra'},
    )

/********ataque enemigos*******/

//Definiendo los arreglos en los pokemones
hipodogeEnemigo.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
    )
    
capipepoEnemigo.ataques.push(
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    )
ratigueyaEnemigo.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🌱',id:'boton-tierra'},
    )

//Definiendo los arreglos en los pokemones
dragoniteEnemigo.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
    )
pichotoEnemigo.ataques.push(
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    )
espeanEnemigo.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🌱',id:'boton-tierra'},
    )

    //Definiendo los arreglos en los pokemones
gengarEnemigo.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
    )
newtwoEnemigo.ataques.push(
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    )
tiranitarEnemigo.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🌱',id:'boton-tierra'},
    )

mokepones.push(
    //originales
        hipodoge, 
        capipepo, 
        ratigueya,
    //2er generacion
        dragonite, 
        pichoto, 
        espean,
    //3er generacion
        gengar, 
        newtwo, 
        tiranitar
    );
console.log(mokepones);

/************[ Inicia del Juego ]***************/
function iniciarJuego() {
    console.log("fun --> iniciarJuego()");

    sectionSeleccionarAtaque.style.display = 'none';
    sectionVerMapa.style.display = 'none';

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

    inputdragonite = document.getElementById('dragonite')
    inputpichoto = document.getElementById('pichoto')
    inputespean = document.getElementById('espean')

    inputgengar = document.getElementById('gengar')
    inputnewtwo = document.getElementById('newtwo')
    inputtiranitar = document.getElementById('tiranitar')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)

    funUnirseAlJuego()
}

function funUnirseAlJuego() {
    
    fetch("http://127.0.0.1:3000/unirse")
        .then(function (res) {
            //Mostramos la respuesta
            console.log(res)

            //Si fue positiva
            if(res.ok){
                res.text()
                .then(function (respuesta) {
                    console.log(respuesta);
                    jugadorId = respuesta 
                }) 
            }
        })
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
    
    } else if (inputdragonite.checked) {
        spanMascotaJugador.innerHTML = inputdragonite.id
        mascotaJugadorSelecionado = inputdragonite.id
    } else if (inputpichoto.checked) {
        spanMascotaJugador.innerHTML = inputpichoto.id
        mascotaJugadorSelecionado = inputpichoto.id

    } else if (inputespean.checked) {
        spanMascotaJugador.innerHTML = inputespean.id
        mascotaJugadorSelecionado = inputespean.id
    
    } else if (inputgengar.checked) {
        spanMascotaJugador.innerHTML = inputgengar.id
        mascotaJugadorSelecionado = inputgengar.id
    } else if (inputnewtwo.checked) {
        spanMascotaJugador.innerHTML = inputnewtwo.id
        mascotaJugadorSelecionado = inputnewtwo.id
    } else if (inputtiranitar.checked) {
        spanMascotaJugador.innerHTML = inputtiranitar.id
        mascotaJugadorSelecionado = inputtiranitar.id
    
    
    } else {
        alert('Selecciona una mascota')
    }
    
    //
    if(mascotaJugadorSelecionado != ""){
        
        //agregar id de la cabecera title
        document.title = `${mascotaJugadorSelecionado} (Id-${jugadorId})`;
        //console.log(vbody); 
        //console.log(vbody.style.backgroundImage); 

        document.body.style.backgroundColor = "black";
        //document.body.style.backgroundImage = "../assets/fondo/fondodf.jpg";
        document.body.style.backgroundImage = "url('')";
        document.body.style.backgroundImage = "ssdtr";

        sectionSeleccionarMascota.style.display = 'none'
        
        //desplegar mapa de canva
        sectionVerMapa.style.display = 'flex'

        //intervalo!!
        iniciarMapa()

        seleccionarMokepon(mascotaJugadorSelecionado)
                
        funExtraerAtaques(mascotaJugadorSelecionado);
        //Selecciona al enemigo de forma automatica.
        //random
        //seleccionarMascotaEnemigo()

        //reproducir el audio
        //const sonido = cargarSonido("sonido.flac");
        const sonido = cargarSonido("SFX_CRY_18.wav");
        sonido.play();
    }
}

/*
function seleccionarMokepon(mokepon) {
    fetch(`http://localhost:3000/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mokepon
        })
    })
}
*/

function seleccionarMokepon(mascotaJugadorSelecionado){
    console.log("fun --> seleccionarMokepon(mascotaJugadorSelecionado)");
    console.log("jugadorId: "+jugadorId);
    console.log(`http://127.0.0.1:3000/mokepon/${jugadorId}`);

    fetch(`http://127.0.0.1:3000/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugadorSelecionado
        })
    })
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

function seleccionarMascotaEnemigo(enemigo) {
    console.log("fun --> seleccionarMascotaEnemigo()");

    spanMascotaEnemigo.innerHTML = enemigo.nombre;
    ataqueMokeponEnemigo = enemigo.ataques;
    

    //Obentenmos el ID array del los pokemones;  
    //let mascotaAleatoria = aleatorio(0,mokepones.length - 1)
    
    //selec. pk enemigo
    //spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
    //selec. ataques enemigo
    //ataqueMokeponEnemigo = mokepones[mascotaAleatoria].ataques;
    //console.log(ataqueMokeponEnemigo);
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
                boton.disabled = true;
            }else if (e.target.textContent === '💧'){
                arrayAtaquesJugador.push('AGUA')
                console.log(arrayAtaquesJugador);
                boton.style.background = 'blue'
                boton.disabled = true;
            }else{
                arrayAtaquesJugador.push('TIERRA')
                console.log(arrayAtaquesJugador);
                boton.style.background = 'green'
                boton.disabled = true;
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

    //disabled = true
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    console.log("fun --> reiniciarJuego()");
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**********[ Canva mober y mapa ] **************/

function funPintarCanvas(){
    //console.log("fun --> funPintarCanvas()");

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX    
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY  

    //cambio por el canva
    //sectionSeleccionarAtaque.style.display = 'flex'
    
    lienzo.clearRect(0, 0, mapa.width, mapa.height)

    //mapa de fondo del juego
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

    //llamada del metodo
    mascotaJugadorObjeto.pintarMoekpon()

    //enviar X Y la posicion 
    funEnviarPosicionXY(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    //pintar enemigo
    hipodogeEnemigo.pintarMoekpon()
    capipepoEnemigo.pintarMoekpon()
    ratigueyaEnemigo.pintarMoekpon()

    dragoniteEnemigo.pintarMoekpon()
    pichotoEnemigo.pintarMoekpon()
    espeanEnemigo.pintarMoekpon()

    gengarEnemigo.pintarMoekpon()
    newtwoEnemigo.pintarMoekpon()
    tiranitarEnemigo.pintarMoekpon()

    //revisar colicion si se esta moviendo
    if (
        mascotaJugadorObjeto.velocidadX !== 0 ||
        mascotaJugadorObjeto.velocidadY !== 0
    ){
        revisarColision(hipodogeEnemigo);
        revisarColision(capipepoEnemigo);
        revisarColision(ratigueyaEnemigo);

        revisarColision(dragoniteEnemigo);
        revisarColision(pichotoEnemigo);
        revisarColision(espeanEnemigo);

        revisarColision(gengarEnemigo);
        revisarColision(newtwoEnemigo);
        revisarColision(tiranitarEnemigo);
    }

    //let imagenDeCapipeto = new Image();
    //imagenDeCapipeto.src = capipepo.foto
    
    //rectangulo!!
    //lienzo.fillRect(5,15,20,40)
    //cara pokemons
}

/*
<button onclick="funMoverArriba()">Arriba</button>
<button onclick="funMoverIzquierda()">Izquierda</button>
<button onclick="funMoverAbajo()">Abajo</button>
<button onclick="funMoverDerecha()">Derecha</button>
*/

function funEnviarPosicionXY(x, y){
    console.log("fun --> funEnviarPosicionXY(x, y)");
    //console.log("jugadorId: "+jugadorId);
    //console.log(`http://127.0.0.1:3000/mokepon/${jugadorId}/posicion`);

    fetch(`http://127.0.0.1:3000/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x: x,
            y: y
        })
        
    })
    .then(function (res) {
        if(res.ok){
          res.json()
              .then(function (dt){
                  console.log(dt);
                  console.log({dt});
              })
        }  
    })
}

function funMoverArriba(){
    //console.log("fun --> funMoverArriba()");
    mascotaJugadorObjeto.velocidadY = -5;    

    /*
    capipepo.y = capipepo.y - 5
    //console.log(capipepo);
    console.log(capipepo.y);
    funPintarCanvas()
    */
}

function funMoverAbajo(){
    //console.log("fun --> funMoverAbajo()");
    mascotaJugadorObjeto.velocidadY = +5;    

    /*
    capipepo.y = capipepo.y + 5
    //console.log(capipepo);
    console.log(capipepo.y);
    funPintarCanvas()
    */
   
}

function funMoverIzquierda(){
    //console.log("fun --> funMoverIzquierda()");
    mascotaJugadorObjeto.velocidadX = -5;    
    /*
    capipepo.x = capipepo.x - 5
    //console.log(capipepo);
    console.log(capipepo.x);
    funPintarCanvas()
    */
}

function funMoverDerecha(){
    //console.log("fun --> funMoverDerecha()");

    mascotaJugadorObjeto.velocidadX = 5;

    /*
    capipepo.x = capipepo.x + 5
    //console.log(capipepo);
    console.log(capipepo.x);
    funPintarCanvas()
    */
}

function funDetenerMovimeinto(){
    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;
}

function sePrecionoUnaTecla(event){
    //console.log(event);
    switch (event.key) {
        case 'ArrowUp':
            funMoverArriba()
            break;
        case 'ArrowDown':
            funMoverAbajo()
            break;
        case 'ArrowLeft':
            funMoverIzquierda()
            break;
        case 'ArrowRight':
            funMoverDerecha()
            break;
        default:
            break;
    }
}

function iniciarMapa(){
    //mapa.width = 700
    //mapa.height = 520

    mascotaJugadorObjeto = obtenerObjMascota(mascotaJugadorSelecionado) 
    intervalo = setInterval(funPintarCanvas, 50);

    //Eventos teclado
    window.addEventListener("keydown", sePrecionoUnaTecla)
    window.addEventListener("keyup", funDetenerMovimeinto)
}

function obtenerObjMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugadorSelecionado === mokepones[i].nombre){
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo){

    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
    
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x
        
    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo 
    ) {
        //console.log("-->libre!");
        return
    }

    let num = random(1,30);
    
    if( num == 7 ){
        console.log("--> EMPIEZA LA BATALLA!");
        let isExecuted = confirm("Encontrastes un MonchiMon salvaje dormido!!, se a despertado y a empezado a atacarte...\n\n Quieres \"ACEPTAR\" la lucha o vas a \" CANCELAR \" e huir...???");
        funDetenerMovimeinto();
                    
        if(isExecuted){
            console.log(isExecuted); // OK = true, Cancel = false
            clearInterval(intervalo);
            sectionSeleccionarAtaque.style.display = 'flex'
            sectionVerMapa.style.display = 'none'
            seleccionarMascotaEnemigo(enemigo)
        }
    }else{
        console.log("Te encontrastes con "+ enemigo.nombre+" !!.. parece dormido. ("+num+")");
    }
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};

window.addEventListener('load', iniciarJuego)
