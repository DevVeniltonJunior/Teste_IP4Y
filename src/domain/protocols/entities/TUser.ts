export namespace TUser {
  export type Entity = {
    id: number,
    cpf: string
    fist_name: string,
    last_name: string,
    birthdate: string | Date,
    email: string,
    gender: string
  }

  export type Model = {
    id: number,
    cpf: string
    fist_name: string,
    last_name: string,
    birthdate: string | Date,
    email: string,
    gender: string
  }

  export type DTO = {
    id: number,
    cpf?: string
    fist_name?: string,
    last_name?: string,
    birthdate?: string | Date,
    email?: string,
    gender?: string
  }
}
