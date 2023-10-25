import { InvalidParam } from '@/domain/exceptions'

export class UserGender {
  private readonly validValues = ['Masculino', 'Feminino', 'Transexual', 'Cisgênero', 'Gênero fluído', 'Não-binário', 'Agênero', 'Dois-espíritos', 'Andrógino', 'Bígênero', 'Demigênero', 'Gênero não conforming', 'Neutrois', 'Pangênero', 'Terceiro gênero']

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