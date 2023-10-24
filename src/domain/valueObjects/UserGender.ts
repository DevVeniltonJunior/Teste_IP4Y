import { InvalidParam } from '@/domain/exceptions'

export class UserGender {
  private readonly validValues = ['Male', 'Female', 'Transgender', 'Cisgender', 'Genderqueer', 'Genderfluid', 'Non-binary', 'Agender', 'Two-spirit', 'Androgynous', 'Bigender', 'Demigender', 'Gender nonconforming', 'Neutrois', 'Pangender', 'Third gender']

  constructor(private readonly value: string) {
    if(!this.value || !this.isValid(this.value)) throw new InvalidParam('Gender')
  }

  private isValid(value: string): boolean {
    if(!this.validValues.includes(value)) return false
    return true
  }

  public toString(): string {
    return this.value
  }
}