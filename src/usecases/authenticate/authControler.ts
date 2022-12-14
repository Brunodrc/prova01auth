import { Request, Response } from "express";
import { AuthUser } from "./authenticateUser";


class AuthControler {

    async handle(req:Request, res: Response){
        const {login, password, code_activate} = req.body

        const authUser = new AuthUser()

        const token = await authUser.execute({
            login,
            password,
            code_activate
        })

        return res.status(200).json((await token))
    }
}

export {AuthControler}