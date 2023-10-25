import { InvalidParam } from "@/domain/exceptions"

export class UserCPF {
  constructor(private readonly value: string) {
    if(!this.value || !this.isValid(this.value)) throw new InvalidParam('CPF')
  }

  private isValid(value: string): boolean {
    const regex = /\d{11}/
    return regex.test(value)
  }

  public toString(): string {
    return this.value
  }
}