import { UserLastName } from "@/domain/valueObjects"

describe('[ValueObjects] UserLastName', () => {
  
  const validValue = ['bob', 'renato', 'rogerio']
  const invalidValue = ['úhsdhaudhasuhdhuasdhuuasdhuhasuhdushd', '', '-100']

  validValue.map(value => {
    it(`Should be able to create an UserLastName with value ${value}`, () => {
      const userId = new UserLastName(value)
      expect(userId.toString()).toBe(value)
    })
  })

  invalidValue.map(value => {
    it(`Should not be able to create an UserLastName with value ${value}`, () => {
      expect(() => new UserLastName(value)).toThrow()
    })
  })
})