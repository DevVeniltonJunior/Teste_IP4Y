import { IFindUser, IUserQueryRepository } from'@/domain/protocols'
import { UserCPF, UserId } from '@/domain/valueObjects'
import { User } from '@/domain/entities'

export class FindUser implements IFindUser {
  constructor(private readonly _repository: IUserQueryRepository) {}
  async byId (id: UserId): Promise<User> {
    return await this._repository.findOne(id)
  }

  async byCPF (cpf: UserCPF): Promise<User> {
    return await this._repository.findByCPF(cpf)
  }

  async all (): Promise<User[]> {
    return await this._repository.findAll()
  }
}
