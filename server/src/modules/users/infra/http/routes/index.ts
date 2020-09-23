import { Router } from 'express'

import UserController from '@modules/users/infra/http/controllers/UserController'

import UserValidator from '@modules/users/infra/http/validators/UserValidator'

const userRouter = Router()

userRouter.post('/', /*UserValidator.create,*/ UserController.create)

export default userRouter
