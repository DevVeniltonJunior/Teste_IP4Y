import { UserDTO } from '@/domain/dtos'
import { User } from '@/domain/entities'
import { UserBirthdate, UserCPF, UserEmail, UserFirstName, UserGender, UserId, UserLastName } from '@/domain/valueObjects'
import { UserQueryRepository, UserCommandRepository } from '@/infra/repositories'

describe('[Repository] UserQuery', () => {
  const repository = new UserQueryRepository()
  const commandRepository = new UserCommandRepository()

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

  beforeAll(async () => {
    const user = await commandRepository.create(fixture)

    userId = user.getId()
    userCPF = user.getCPF()
  })

  it('Should be able to find a User by id without throw any error', async () => {
    const user = await repository.findOne(userId)

    expect(() => user).not.toThrow()
  })

  it('Should be able to find a User by CPF without throw any error', async () => {
    expect(async () => await repository.findByCPF(userCPF)).not.toThrow()
  })

  it('Should be able to find a all User without throw any error', async () => {
    expect(async () => await repository.findAll()).not.toThrow()
  })
})
