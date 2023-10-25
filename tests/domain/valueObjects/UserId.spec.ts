import { UserId } from "@/domain/valueObjects"

describe('[ValueObjects] UserId', () => {
  
  const validValue = [1, 50, 1000]
  const invalidValue = [0, -1, -100]

  validValue.map(value => {
    it(`Should be able to create an UserId with value ${value}`, () => {
      const userId = new UserId(value)
      expect(userId.toNumber()).toBe(value)
    })
  })

  invalidValue.map(value => {
    it(`Should not be able to create an UserId with value ${value}`, () => {
      expect(() => new UserId(value)).toThrow()
    })
  })
})