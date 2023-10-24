import { TUser } from "@/domain/protocols";
import { PrismaClient } from "@prisma/client";

export class DatabaseAdapter {
  private readonly _repo = new PrismaClient()

  async create(data: TUser.Entity): Promise<TUser.Model> {
    return await this._repo.user.create({data})
  }

  async update(id: number,data: Partial<TUser.Model>): Promise<void> {
    await this._repo.user.update({where: {id}, data})
  }

  async delete(id: number): Promise<void> {
    await this._repo.user.delete({where: {id}})
  }

  async findOne(id: number): Promise<TUser.Model | null> {
    return await this._repo.user.findUnique({ where: {id}})
  }

  async findByCPF(cpf: string): Promise<TUser.Model | null> {
    return await this._repo.user.findUnique({ where: {cpf}})
  }

  async findAll(): Promise<TUser.Model[]> {
    return await this._repo.user.findMany()
  }
}