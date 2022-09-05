import { Request, Response } from "express";
import { CreateUser } from "./createUser";

class CreateUserController{

    async handle(req:Request, res:Response){

        const {name, login, telefone, password} = req.body

        const createUser = new CreateUser()
        
       try{
        const user = await createUser.execute({
            name,
            login, 
            telefone, 
            password, 
        })

        //criar a chave de Ativação de Conta via email (fake)
        
        return res.status(200).json({user}) 
        }catch(err){
            return res.status(404).json({error:"Usuário já existe."})
        }
    }
}

export {CreateUserController}