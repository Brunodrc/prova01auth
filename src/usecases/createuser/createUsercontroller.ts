import { Request, Response } from "express";
import { CreateUser } from "./createUser";

class CreateUserController{

    async handle(req:Request, res:Response){

        const {name, login, telefone, password, conta_ativa} = req.body

        const createUser = new CreateUser()
        
       try{
        const user = await createUser.execute({
            name,
            login, 
            telefone, 
            password, 
            conta_ativa,
        })

        //
        
        return res.status(200).json({user, activatekey}) 
        }catch(err){
            return res.status(404).json({error:"Usuário já existe."})
        }
    }
}

export {CreateUserController}