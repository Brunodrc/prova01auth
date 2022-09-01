import { client } from "../../prisma/client";
import {hash} from "bcryptjs"

interface IReqUser {
    name: string
    login: string
    telefone: string
    password: string
    conta_ativa: boolean
}

class CreateUser {

    async execute({name, login, telefone, password, conta_ativa}:IReqUser){
        //Verificar se já existe um usuario
        const userExists = await client.user.findFirst({
            where:{
                login
            }
        })
        if(userExists){
            throw new Error("Usuário já existe.")
        }

        // cryptografar a senha
        const passHash = await hash(password,8)

        //cadastra o usuário
        const user = await client.user.create({
            data:{
                name,
                login,
                telefone,
                password:passHash,
                conta_ativa,
            }
        })

        return user
    }
}

export {CreateUser}