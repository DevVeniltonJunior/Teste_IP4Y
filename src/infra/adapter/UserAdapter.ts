import { UserDTO } from "@/domain/dtos";
import { User } from "@/domain/entities";
import { TUser } from "@/domain/protocols";
import { UserBirthdate, UserCPF, UserEmail, UserFirstName, UserGender, UserId, UserLastName } from "@/domain/valueObjects";

export class UserAdapter {
  public static toEntity(model: TUser.Model): User {
    return new User(
      new UserId(model.id),
      new UserCPF(model.cpf),
      new UserFirstName(model.fist_name),
      new UserLastName(model.last_name),
      new UserBirthdate(model.birthdate),
      new UserEmail(model.email),
      new UserGender(model.gender)
    )
  }

  public static toModel(entity: User): TUser.Model {
    return entity.toJson()
  }

  public static toPartialModel(dto: UserDTO): Partial<TUser.Model> {
    console.log(dto)
    return dto.toJson()
  }

  public static toDTO(data: TUser.DTO): UserDTO {
    return new UserDTO(
      new UserId(data.id),
      data.cpf ? new UserCPF(data.cpf) : undefined,
      data.fist_name ? new UserFirstName(data.fist_name) : undefined,
      data.last_name ? new UserLastName(data.last_name) : undefined,
      data.birthdate ? new UserBirthdate(data.birthdate) : undefined,
      data.email ? new UserEmail(data.email) : undefined,
      data.gender ? new UserGender(data.gender) : undefined
    )
  }
}