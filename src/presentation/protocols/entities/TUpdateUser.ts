import { TUser } from '@/domain/protocols'

export namespace TUpdateUser {
  export namespace Request {
    export type params = object
    export type body = TUser.DTO
    export type query = object
    }
  export type Response = any
}
