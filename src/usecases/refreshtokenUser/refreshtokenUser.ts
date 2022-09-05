import { client } from "../../prisma/client"
import { GeraAcessToken } from "../../provider/geratoken"
import dayjs from "dayjs"
import { GeraRefreshToken } from "../../provider/geraRefreshToken"

class RefreshTokenUser {

    async execute(refresh_token: string){
        //verificar se o refresh token receibo está no banco de dados

        const refresToken = await client.refreshToken.findFirst({
            where:{
                id: refresh_token
            }
        })
        if(!refresToken){
            throw new Error("Não há um token válido")
        }

        const geraAcessToken = new GeraAcessToken()
        const token = await geraAcessToken.execute(refresToken.userId)

        const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refresToken.expiresIn))
        if(refreshTokenExpired){
            await client.refreshToken.deleteMany({
                where:{
                    userId: refresToken.userId
                }
            })
            const geranewRefreshToken = new GeraRefreshToken()
            const refreshtokenNew = geranewRefreshToken.execute(refresToken.userId)

            return {token, refreshToken: refreshtokenNew}
        }

        return {token}
    }
}

export { RefreshTokenUser }