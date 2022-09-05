import { client } from "../../prisma/client";
import {hash} from "bcryptjs"
//import dayjs from 'dayjs'

interface IReqUser {
    name: string
    login: string
    telefone: string
    password: string
}

class CreateUser {

    async execute({name, login, telefone, password}:IReqUser){
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
        //codigo para ativação da conta
        //const timeexpiresIn = dayjs().add(2, 'hours').unix()

        const getCode = (size: number) => {
            let code: string = ''
            for (let i = 0; i < size; i++){
                code += Math.trunc(Math.random() * 10) + ''
            }
            return code
        }
        const geraactivatekey = getCode(4)
        //cadastra o usuário
        const user = await client.user.create({
            data:{
                name,
                login,
                telefone,
                password:passHash,
                code_activate: geraactivatekey,
            },
        })
        
        


        return user
    }
}

export {CreateUser}