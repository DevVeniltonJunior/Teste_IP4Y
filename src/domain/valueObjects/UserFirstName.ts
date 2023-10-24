import { InvalidParam } from "@/domain/exceptions"

export class UserFirstName {
  constructor(private readonly value: string) {
    if(!this.value || !this.isValid(this.value)) throw new InvalidParam('Fist name')
  }

  private isValid(value: string): boolean {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{1,20}$/
    return regex.test(value)
  }

  public toString(): string {
    return this.value
  }
}