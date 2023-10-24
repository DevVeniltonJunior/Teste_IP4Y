import { UserDTO } from '@/domain/dtos'

export interface IUpdateUser {
execute: (entity: UserDTO) => Promise<void>
}
