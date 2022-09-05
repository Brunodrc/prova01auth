import { client } from "../../../prisma/client"

interface IReqReading{
    titulo: string
    subtitulo: string
    tags: string   
}

class CreateReading {
    
    async execute({titulo, subtitulo, tags}:IReqReading){
        
        const reading = await client.leitura.create({
            data:{
                titulo,
                subtitulo,
                tags
            }
        })

        return reading
    }
}

export {CreateReading}