import { UserFirstName } from "@/domain/valueObjects"

describe('[ValueObjects] UserFirstName', () => {
  
  const validValue = ['bob', 'renato', 'rogerio']
  const invalidValue = ['úhsdhaudhasuhdhuasdhuuasdhuhasuhdushd', '', '-100']

  validValue.map(value => {
    it(`Should be able to create an UserFirstName with value ${value}`, () => {
      const userId = new UserFirstName(value)
      expect(userId.toString()).toBe(value)
    })
  })

  invalidValue.map(value => {
    it(`Should not be able to create an UserFirstName with value ${value}`, () => {
      expect(() => new UserFirstName(value)).toThrow()
    })
  })
})