import { UserDTO } from '@/domain/dtos'
import { User } from '@/domain/entities'
import { IUserCommandRepository } from '@/domain/protocols'
import { UserId } from '@/domain/valueObjects'
import { DatabaseAdapter, UserAdapter } from '@/infra/adapter'

export class UserCommandRepository implements IUserCommandRepository {
  private readonly databaseAdapter = new DatabaseAdapter()

  async create (entity: User): Promise<User> {
    const model = UserAdapter.toModel(entity)

    delete (<any>model).id

    const user = await this.databaseAdapter.create(model)

    return UserAdapter.toEntity(user)
  }

  async update (dto: UserDTO): Promise<void> {
    const id = dto.getId()
    const partialModel = UserAdapter.toPartialModel(dto)

    delete (<any>partialModel).id

    await this.databaseAdapter.update(id.toNumber(), partialModel)
  }

  async delete (id: UserId): Promise<void> {
    await this.databaseAdapter.delete(id.toNumber())
  }
}