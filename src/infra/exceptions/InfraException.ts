export class InfraException extends Error {
  constructor(param: string) {
    super(param)
    this.name = `Database exception: ${param}`
  }
}