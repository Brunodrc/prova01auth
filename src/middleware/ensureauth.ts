import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { secretkey } from "../usecases/authenticate/authenticateUser";

export function ensureAuth(req:Request, res:Response, next:NextFunction){

    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).json({msg:"O token está faltando"})
    }

    const [typeAuth, token] = authToken.split(' ')

    try{
        
        verify(token, secretkey)
        return next()

    }catch(err){
        return res.status(401).json({msg:"Token inválido."})
    }
}