import { client } from "../../prisma/client";
import dayjs from "dayjs";


class ActivateAccount {

    async esecute(userId: string){
        const expiresIn: number = dayjs().add(2, 'hours').unix()

        const getCode = (size: number) => {
            let code: string = ''
            for (let i = 0; i < size; i++){
                code += Math.trunc(Math.random() * 10) + ''
            }
            return code
        }
        const geraactivatekey = getCode(4)
        
        const accountActivate = await client.accountActivate.create({
            data:{
                userId,
                expiresIn,
            }
        })
    }
}