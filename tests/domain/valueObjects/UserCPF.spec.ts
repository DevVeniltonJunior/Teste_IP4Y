import { UserCPF } from "@/domain/valueObjects"

describe('[ValueObjects] UserCPF', () => {
  
  const validValue = ['12345678910', '98745612332', '45678912320']
  const invalidValue = ['asdef', '423aaabbbcc', '4567891239a']

  validValue.map(value => {
    it(`Should be able to create an UserCPF with value ${value}`, () => {
      const userId = new UserCPF(value)
      expect(userId.toString()).toBe(value)
    })
  })

  invalidValue.map(value => {
    it(`Should not be able to create an UserCPF with value ${value}`, () => {
      expect(() => new UserCPF(value)).toThrow()
    })
  })
})