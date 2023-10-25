import { UserDTO } from '@/domain/dtos'
import { User } from '@/domain/entities'
import { UserBirthdate, UserCPF, UserEmail, UserFirstName, UserGender, UserId, UserLastName } from '@/domain/valueObjects'
import { UserCommandRepository } from '@/infra/repositories'

describe('[Repository] UserCommand', () => {
  const repository = new UserCommandRepository()

  let userId: UserId
  let userCPF: UserCPF

  const cpf = (): string => {
    let value = ''

    for(let i = 0; i < 11; i++) {
      value += Math.floor(Math.random() * 10)
    }

    return value
  }

  const fixture = new User(
    new UserId(10),
    new UserCPF(cpf()),
    new UserFirstName('First'),
    new UserLastName('Last'),
    new UserBirthdate('2022-01-01T00:00:00.000Z'),
    new UserEmail('email@email.com'),
    new UserGender('Male'),
  )

  it('Should be able to create a new User without throw any error', async () => {
    console.log(fixture)

    const user = await repository.create(fixture)

    console.log(user)

    expect(() => user).not.toThrow()

    userId = user.getId()
    userCPF = user.getCPF()
  })

  it('Should be able to update a new User without throw any error', async () => {
    const dto = new UserDTO(
      userId,
      undefined,
      new UserFirstName('Middle'),
    )

    expect(async () => await repository.update(dto)).not.toThrow()
  })
  
  it('Should be able to throw if an CPF is already registered', async () => {
    const newFixture = Object.assign(fixture, {_userCPF: userCPF})
    await expect(async () => repository.create(newFixture)).rejects.toThrow()
  })

  it('Should be able to delete a new User without throw any error', async () => {
    expect(async () => await repository.delete(userId)).not.toThrow()
  })

})
