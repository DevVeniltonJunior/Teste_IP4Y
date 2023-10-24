import 'module-alias/register'
import { Router, Request, Response } from 'express'
import { TCreateUser, TDeleteUser, TGetUser, TUpdateUser } from '@/presentation/protocols'
import { CreateUserController, DeleteUserController, GetUserController, UpdateUserController } from '@/presentation/controllers'

export const router = Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/user', async (req: Request<any, any, any, TGetUser.Request.query>, res: Response) => {
  const response = await GetUserController.handle(req)
  res.status(response.statusCode).json(response.data)
})

router.post('/user', async (req: Request<any, any, any, TCreateUser.Request.body>, res: Response) => {
  const response = await CreateUserController.handle(req)
  res.status(response.statusCode).json(response.data)
})

router.put('/user', async (req: Request<any, any, any, TUpdateUser.Request.body>, res: Response) => {
  const response = await UpdateUserController.handle(req)
  res.status(response.statusCode).json(response.data)
})

router.delete('/user', async (req: Request<any, any, any, TDeleteUser.Request.query>, res: Response) => {
  const response = await DeleteUserController.handle(req)
  res.status(response.statusCode).json(response.data)
})
