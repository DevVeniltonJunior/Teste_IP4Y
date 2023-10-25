import { User } from '@/domain/entities'
import { IUserQueryRepository } from '@/domain/protocols'
import { UserCPF, UserId } from '@/domain/valueObjects'
import { DatabaseAdapter, UserAdapter } from '@/infra/adapter'
import { InfraException } from '@/infra/exceptions'

export class UserQueryRepository implements IUserQueryRepository {
  private readonly databaseAdapter = new DatabaseAdapter()

  async findOne(id: UserId): Promise<User> {
    const user = await this.databaseAdapter.findOne(id.toNumber())

    if(!user) throw new InfraException('User not found')

    return UserAdapter.toEntity(user)
  }

  async findByCPF(cpf: UserCPF): Promise<User> {
    const user = await this.databaseAdapter.findByCPF(cpf.toString())

    if(!user) throw new InfraException('User not found')

    return UserAdapter.toEntity(user)
  }

  async findAll(): Promise<User[]> {
    const users = await this.databaseAdapter.findAll()

    if(!users || users.length <= 0) throw new InfraException('User not found')

    return users.map(user => UserAdapter.toEntity(user))
  }
}
