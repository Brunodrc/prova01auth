import express, { Request, Response } from "express"
import { router } from "./routes"

const app = express()

const port = 3333
app.use(express.json())

app.use(router)


//teste da conexão com o servidor
app.get('/testserver',(req:Request, res:Response)=>{
    res.status(200).json({msg: "Está funcionando, por enquanto..."})
})

app.listen(port, ()=> console.log(`Servidor rodando: http://localhost:${port}`))