//importar el FKR express.js
const express = require("express")
//libreria para expres -CORS:Cross-Origin Resource Sharing
const cors = require("cors")
const { log } = require("console")

//iniciar una Aplicaion con express.js
const app = express()
//llamada a Cors, para politicas del navegador prevenir solcitudes
app.use(cors())
//peticiones JSON sopostrar
app.use(express.json())

class clsJugador{
    //var    
    //..

    //constructor
    constructor(
        id
    ){
        this.id = id
    }
    //metodos
    met_AsignarMokepon(mokepon) {
        this.mokepon = mokepon
    }
    met_ActualizarPosicionXY(x , y){
        this.x = x
        this.y = y
    }
}

class clsPokemon {
    //var
    //..

    constructor(
        nombre
    ){
        this.nombre = nombre
    }
    //metodos
}

const arrayJugadores = []

//jugadores
app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new clsJugador(id)

    arrayJugadores.push(jugador)

    //agregar cabecera, tipo connfiguración acepta. 
    res.setHeader("Access-Control-Allow-Origin","*");

    res.send(id)
})

app.post("/mokepon/:jugadorId", (req, res) => {

    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new clsPokemon(nombre)

    const jugadorIndex = arrayJugadores.findIndex((jugador) => jugadorId === jugador.id)

    if(jugadorIndex >= 0) {
        //se le agrego la clase clspokemon
        arrayJugadores[jugadorIndex].met_AsignarMokepon(mokepon)
    }

    console.log(arrayJugadores)
    console.log(jugadorId)
    
    //res.end:  respode un dato vacio para la peticion post]
    res.end()
})

//Servicio: de posicion Pokemon
app.post("/mokepon/:jugadorId/posicion", (req, res) => {

    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = arrayJugadores.findIndex((jugador) => jugadorId === jugador.id)

    if(jugadorIndex >= 0) {
        //se le agrego la clase clspokemon
        arrayJugadores[jugadorIndex].met_ActualizarPosicionXY(x, y)
    }

    //filtra el array/lista que cumplan la condicion
    const arrayEnemigos = arrayJugadores.filter((jugador) => jugadorId !== jugador.id)

    //res.end:  respode un dato vacio para la peticion post, esnecesario respoder Algo
    //res.end()

    //res.send: para enviar los JSON al Frontend
    res.send(
        {arrayEnemigos}
    )
    
})

//recivir las peticiones de usuarios
/*
app.get("/", (req, res) => {
    res.send("hola")
})
*/

//Escucha contionuamente port 8080 las peticiones de los clientes
app.listen(3000, () => {
    console.log("Servidor funcionando")
})

