import { ICreateUser, IUserCommandRepository } from'@/domain/protocols'
import { User } from '@/domain/entities'

export class CreateUser implements ICreateUser {
  constructor(private readonly _repository: IUserCommandRepository) {}
  async execute (entity: User): Promise<User> {
    console.log(entity)
    return await this._repository.create(entity)
  }
}
