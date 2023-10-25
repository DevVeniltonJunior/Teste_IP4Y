import { UserDTO } from '@/domain/dtos'
import { UpdateUser } from '@/domain/usecases'
import { UserBirthdate, UserCPF, UserEmail, UserFirstName, UserGender, UserId, UserLastName } from '@/domain/valueObjects'
import { UserCommandRepository } from '@/infra/repositories'
import { TUpdateUser, TRoute, Response } from '@/presentation/protocols'

export class UpdateUserController {
  public static async handle(req: TRoute.handleParams<TUpdateUser.Request.body, TUpdateUser.Request.params, TUpdateUser.Request.query>): Promise<Response<TUpdateUser.Response>> {
    const userParam = req.body

    const repository = new UserCommandRepository()
    const updateUser = new UpdateUser(repository)

    try {
      await updateUser.execute(new UserDTO(
        new UserId(userParam.id),
        userParam.cpf ? new UserCPF(userParam.cpf) : undefined,
        userParam.first_name ? new UserFirstName(userParam.first_name) : undefined,
        userParam.last_name ? new UserLastName(userParam.last_name) : undefined,
        userParam.birthdate ? new UserBirthdate(userParam.birthdate) : undefined,
        userParam.email ? new UserEmail(userParam.email) : undefined,
        userParam.gender ? new UserGender(userParam.gender) : undefined
      ))
  
      return {
        statusCode: 200,
        data: { message: 'Updated' }
      }
    } catch(err) {
      return {
        statusCode: 500,
        data: err
      }
    }
  }
}