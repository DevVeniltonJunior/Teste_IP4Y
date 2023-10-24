import { IUpdateUser, IUserCommandRepository } from'@/domain/protocols'
import { UserDTO } from '@/domain/dtos'

export class UpdateUser implements IUpdateUser {
  constructor(private readonly _repository: IUserCommandRepository) {}
  async execute (entity: UserDTO): Promise<void> {
    await this._repository.update(entity)
  }
}
