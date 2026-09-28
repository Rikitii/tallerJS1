import express, { request } from "express"

class Server {
    app
    port

    constructor() {
        this.app = express()
        this.port = 1500

        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.get("/", (request,res)=>{
            res.send("Hola, polque no me ha mandado uno wasa")
        })

        // this.app.post("/profile", (request,res)=>{

        //     const datos = request.body

        //     console.log(datos)

        //     res.status(200).json({ msg: "hola" + datos.name})
        // })

        // this.app.get("/hola/:nombre" , (request,res) => {
        //     const datos = request.params

        //     res.status(200).json({
        //         msg: datos.nombre
        //     })
        // })

        // this.app.get("/doblas/:numero" , (request,res) => {
        //     res.status(200).json({ resultado: request.params.num * 2})
        // })

        // this.app.get("/saludo",(request,res) => {
        //     const datos = request.query

        //     console.log(datos)

        //     res.status(200).json(datos)
        // })

        // this.app.post("/convertir",(request,res) => {
        //     const celsius = request.query

        //     const fahr = ((celsius * 1.8) + 32)

            
        // })
    }


    // profile() {
    //     this.app.post("/", (request,res)=>{
    //         res.send("Si Julianita me pega con la botella es por mi bien")
    //     })
    // }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("listen port " + this.port)
        })
    }
}

new Server().listen()