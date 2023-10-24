import { User } from '@/domain/entities/'
import { UserDTO } from '@/domain/dtos'
import { UserId } from '@/domain/valueObjects'

export interface IUserCommandRepository {
  create: (entity: User) => Promise<User>
  update: (dto: UserDTO) => Promise<void>
  delete: (id: UserId) => Promise<void>
}
