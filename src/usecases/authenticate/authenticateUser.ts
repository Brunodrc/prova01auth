import { client } from "../../prisma/client"
import {compare} from "bcryptjs"
import { GeraRefreshToken } from "../../provider/geraRefreshToken"
import { GeraAcessToken } from "../../provider/geratoken"
//import dayjs from "dayjs"

const secretkey = "euconsigo"
interface IReqAuth{
    login: string
    password: string
    code_activate: string
}

class AuthUser {

    async execute({login, password, code_activate}: IReqAuth){

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
        //verifica se o code_activate é valido
        if(code_activate != userExists.code_activate){
            throw new Error("Código incorreto.")
        }
        //verifica se o código está em tempo de usar
        //const code_activateExpire = dayjs().isAfter(dayjs.unix())
       
        //gerar acesstoken
        const geraAcessToken = new GeraAcessToken()
        const token = await geraAcessToken.execute(userExists.id)

        await client.refreshToken.deleteMany({
            where:{
                userId: userExists.id
            }
        })

        //gera refreshtoken
        const geraRefreshToken = new GeraRefreshToken()
        const refreshToken = await geraRefreshToken.execute(userExists.id)

        return {token, refreshToken}
    }
}

export {AuthUser, secretkey}