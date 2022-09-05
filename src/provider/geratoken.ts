import {sign} from 'jsonwebtoken'
import {secretkey} from '../usecases/authenticate/authenticateUser'

class GeraAcessToken {

    async execute(userId:string){
        const token = await sign({}, secretkey, {
            subject: userId,
            expiresIn: "20s"
        })

        return token
        
    }
}

export{GeraAcessToken}