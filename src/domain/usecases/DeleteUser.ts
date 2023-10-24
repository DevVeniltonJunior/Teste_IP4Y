import { IDeleteUser, IUserCommandRepository } from'@/domain/protocols'
import { UserId } from '@/domain/valueObjects'

export class DeleteUser implements IDeleteUser {
  constructor(private readonly _repository: IUserCommandRepository) {}
  async execute (id: UserId): Promise<void> {
    await this._repository.delete(id)
  }
}
