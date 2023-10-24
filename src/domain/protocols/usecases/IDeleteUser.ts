import { UserId } from '@/domain/valueObjects'

export interface IDeleteUser {
execute: (id: UserId) => Promise<void>
}
