import { Request, Response } from "express";
import { RefreshTokenUser } from "./refreshtokenUser";


class RefreshTokenUserController {

    async handle(req:Request, res:Response){

        const {refresh_token} = req.body

        const refreshTokenUser = new RefreshTokenUser()

        const token = refreshTokenUser.execute(refresh_token)

        return res.status(200).json((await token))

    }
}

export {RefreshTokenUserController}