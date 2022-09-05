import dayjs from "dayjs";
import { client } from "../prisma/client";

//a ideia é que essa função fosse separada mas n consegui desenvolver a logica pra receber
//os dados efetuar a checagem e salvar no usuario
class ActivateAccount {

    async execute(id: string){
        //verificar se o usuario foi cadastrado no banco de dados
        const useralExists = await client.user.findFirst({
            where:{
                id
            }
        })
        if(!useralExists){
            throw new Error("Usuário não cadastrado")
        }
        const timeexpiresIn = dayjs().add(2, 'hours').unix()

        const getCode = (size: number) => {
            let code: string = ''
            for (let i = 0; i < size; i++){
                code += Math.trunc(Math.random() * 10) + ''
            }
            return code
        }
        const geraactivatekey = getCode(4)
        
        return {geraactivatekey, timeexpiresIn}
        
    }
}

export {ActivateAccount}