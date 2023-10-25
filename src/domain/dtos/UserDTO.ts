import { UserId, UserCPF, UserFirstName, UserLastName, UserBirthdate, UserEmail, UserGender } from '@/domain/valueObjects'
import { TUser } from '@/domain/protocols'

export class UserDTO {
  constructor (
    private readonly _userId: UserId,
    private readonly _userCPF?: UserCPF,
    private readonly _userFistName?: UserFirstName,
    private readonly _userLastName?: UserLastName,
    private readonly _userBirthdate?: UserBirthdate,
    private readonly _userEmail?: UserEmail,
    private readonly _userGender?: UserGender
  ) {}

  public getId(): UserId {
    return this._userId
  }

  public getCPF(): UserCPF | undefined {
    return this._userCPF
  }

  public getFistName(): UserFirstName | undefined  {
    return this._userFistName
  }
  
  public getLastName(): UserLastName | undefined  {
    return this._userLastName
  }

  public getBirthdate(): UserBirthdate | undefined  {
    return this._userBirthdate
  }

  public getEmail(): UserEmail | undefined  {
    return this._userEmail
  }

  public getGender(): UserGender | undefined  {
    return this._userGender
  }

  public toJson(): TUser.DTO  {
    return {
      id: this._userId.toNumber(),
      cpf: this._userCPF ? this._userCPF.toString() : undefined,
      first_name: this._userFistName ? this._userFistName.toString() : undefined,
      last_name: this._userLastName ? this._userLastName.toString() : undefined,
      birthdate: this._userBirthdate ? this._userBirthdate.toISO() : undefined,
      email: this._userEmail ? this._userEmail.toString() : undefined,
      gender: this._userGender ? this._userGender.toString() : undefined
    }
  }
}