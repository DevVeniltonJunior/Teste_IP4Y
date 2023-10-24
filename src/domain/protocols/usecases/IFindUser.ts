import { User } from '@/domain/entities'
import { UserCPF, UserId } from '@/domain/valueObjects'

export interface IFindUser {
  byId: (id: UserId) => Promise<User>
  byCPF: (cpf: UserCPF) => Promise<User>
  all: () => Promise<User[]>
}
