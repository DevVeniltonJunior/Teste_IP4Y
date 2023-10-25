import { FindUser } from '@/domain/usecases'
import { UserQueryRepository } from '@/infra/repositories'
import { TGetUser, TRoute, Response } from '@/presentation/protocols'

export class GetUserController {
  public static async handle(req: TRoute.handleParams<TGetUser.Request.body, TGetUser.Request.params, TGetUser.Request.query>): Promise<Response<TGetUser.Response>> {

    const repository = new UserQueryRepository()
    const deleteUser = new FindUser(repository)

    try {
      const entities = await deleteUser.all()
  
      return {
        statusCode: 200,
        data: entities.map(entity => entity.toJson())
      }
    } catch {
      return {
        statusCode: 500,
        data: { message: 'Server Error'}
      }
    }
  }
}