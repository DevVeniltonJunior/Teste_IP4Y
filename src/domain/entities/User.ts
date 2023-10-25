import { UserId, UserCPF, UserFirstName, UserLastName, UserBirthdate, UserEmail, UserGender } from '@/domain/valueObjects'
import { TUser } from '@/domain/protocols'

export class User {
  constructor (
    private readonly _userId: UserId,
    private readonly _userCPF: UserCPF,
    private readonly _userFistName: UserFirstName,
    private readonly _userLastName: UserLastName,
    private readonly _userBirthdate: UserBirthdate,
    private readonly _userEmail: UserEmail,
    private readonly _userGender: UserGender
  ) {}

  public getId(): UserId {
    return this._userId
  }

  public getCPF(): UserCPF {
    return this._userCPF
  }

  public getFistName(): UserFirstName {
    return this._userFistName
  }
  
  public getLastName(): UserLastName {
    return this._userLastName
  }

  public getBirthdate(): UserBirthdate {
    return this._userBirthdate
  }

  public getEmail(): UserEmail {
    return this._userEmail
  }

  public getGender(): UserGender {
    return this._userGender
  }

  public toJson(): TUser.Entity {
    return {
      id: this._userId.toNumber(),
      cpf: this._userCPF.toString(),
      first_name: this._userFistName.toString(),
      last_name: this._userLastName.toString(),
      birthdate: this._userBirthdate.toISO(),
      email: this._userEmail.toString(),
      gender: this._userGender.toString()
    }
  }
}