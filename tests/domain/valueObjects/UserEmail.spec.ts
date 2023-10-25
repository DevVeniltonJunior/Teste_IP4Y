import { UserEmail } from "@/domain/valueObjects"

describe('[ValueObjects] UserEmail', () => {
  
  const validValue = ['bob@email.com', 'renato@email.com.br', 'rogerio@email.com']
  const invalidValue = ['@email.com', 'a@email', 'bob@email']

  validValue.map(value => {
    it(`Should be able to create an UserEmail with value ${value}`, () => {
      const userId = new UserEmail(value)
      expect(userId.toString()).toBe(value)
    })
  })

  invalidValue.map(value => {
    it(`Should not be able to create an UserEmail with value ${value}`, () => {
      expect(() => new UserEmail(value)).toThrow()
    })
  })
})