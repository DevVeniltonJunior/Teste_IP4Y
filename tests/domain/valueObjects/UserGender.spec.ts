import { UserGender } from "@/domain/valueObjects"

describe('[ValueObjects] UserGender', () => {
  
  const validValue = ['Masculino', 'Feminino', 'Transexual']
  const invalidValue = ['any', '', 'robot']

  validValue.map(value => {
    it(`Should be able to create an UserGender with value ${value}`, () => {
      const userId = new UserGender(value)
      expect(userId.toString()).toBe(value)
    })
  })

  invalidValue.map(value => {
    it(`Should not be able to create an UserGender with value ${value}`, () => {
      expect(() => new UserGender(value)).toThrow()
    })
  })
})