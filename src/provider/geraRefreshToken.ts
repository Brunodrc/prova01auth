import { client } from "../prisma/client";
import dayjs from "dayjs";

class GeraRefreshToken {
    
    async execute (userId:string){
        const expiresIn = dayjs().add(15, 'seconds').unix()

        const geraRefreshToken = await client.refreshToken.create({
            data:{
                userId,
                expiresIn,
            },
        })

        return geraRefreshToken
    }
}

export {GeraRefreshToken}