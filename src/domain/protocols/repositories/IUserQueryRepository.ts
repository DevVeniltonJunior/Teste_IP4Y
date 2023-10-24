import { User } from '@/domain/entities/User'
import { UserCPF, UserId } from '@/domain/valueObjects'

export interface IUserQueryRepository {
  findOne: (id: UserId) => Promise<User>
  findByCPF: (id: UserCPF) => Promise<User>
  findAll: () => Promise<User[]>
}
