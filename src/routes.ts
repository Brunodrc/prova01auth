import { Router } from "express";
import { AuthControler } from "./usecases/authenticate/authControler";
import { CreateUserController } from "./usecases/createuser/createUsercontroller";

const router = Router()
const createUser = new CreateUserController()
const authUser = new AuthControler()

router.post('/cadastro', createUser.handle)
router.post('/login', authUser.handle)


export {router}