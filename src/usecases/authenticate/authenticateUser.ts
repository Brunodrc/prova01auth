import { client } from "../../prisma/client"
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

const secretkey = "euconsigo"
interface IReqAuth{
    login: string
    password: string
}

class AuthUser {

    async execute({login, password}: IReqAuth){

        //usuário está no banco de dados
        const userExists = await client.user.findFirst({
            where:{
                login
            }
        })
        if(!userExists){
            throw new Error("Login ou senha incorretos.")
        }

        //verificar se a senha está correta
        const passMatch = await compare(password, userExists.password)
        if(!passMatch){
            throw new Error("Login ou senha incorretos.")
        } 

        //gerar acesstoken
        const token = await sign({}, secretkey, {
            subject: userExists.id,
            expiresIn: "20s"
        })

        return {token}
    }
}

export {AuthUser, secretkey}