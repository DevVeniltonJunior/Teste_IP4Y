import { DeleteUser } from '@/domain/usecases'
import { UserBirthdate, UserCPF, UserEmail, UserFirstName, UserGender, UserId, UserLastName } from '@/domain/valueObjects'
import { UserCommandRepository } from '@/infra/repositories'
import { TDeleteUser, TRoute, Response } from '@/presentation/protocols'

export class DeleteUserController {
  public static async handle(req: TRoute.handleParams<TDeleteUser.Request.body, TDeleteUser.Request.params, TDeleteUser.Request.query>): Promise<Response<TDeleteUser.Response>> {
    const userId = req.query.id

    const repository = new UserCommandRepository()
    const deleteUser = new DeleteUser(repository)

    try {
      await deleteUser.execute(new UserId(parseFloat(userId)))
  
      return {
        statusCode: 200,
        data: { message: 'deleted' }
      }
    } catch(err) {
      return {
        statusCode: 500,
        data: err
      }
    }
  }
}