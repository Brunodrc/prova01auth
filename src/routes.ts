import { Router } from "express";
import { AuthControler } from "./usecases/authenticate/authControler";
import { CreateUserController } from "./usecases/createuser/createUsercontroller";
import { RefreshTokenUserController } from "./usecases/refreshtokenUser/refreshtokenUserController";

const router = Router()
const createUser = new CreateUserController()
const authUser = new AuthControler()
const refreshTokenUserControl = new RefreshTokenUserController()

router.post('/cadastro', createUser.handle)
router.post('/login', authUser.handle)
router.post('/refresh-token', refreshTokenUserControl.handle)


export {router}