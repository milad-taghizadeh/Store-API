import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { Repository } from 'src/common/interfaces/repository';
import { PrismaService } from 'src/database/database.service';
import { v4 as uuid } from "uuid";

@Injectable()
export class CategoryRepository implements Repository<Category> {

  constructor(private readonly prismaService: PrismaService) {}


  async create(data: Omit<Category, "id" | "createdAt" | "updatedAt">): Promise<Category> {
    return await this.prismaService.category.create({
      data: {
        ...data,
      },
    });
  }

  async update(id: number, data: Omit<Category, "id" | "createdAt" | "updatedAt">): Promise<Category> {
    return await this.prismaService.category.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async findById(id: number): Promise<Category> {
    return await this.prismaService.category.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<Category[]> {
    return await this.prismaService.category.findMany();
  }

  async deleteById(id: number): Promise<Category> {
    return await this.prismaService.category.delete({
      where: {
        id,
      },
    });
  }

  async findByName(name: string): Promise<Category> {
    return await this.prismaService.category.findUnique({
      where: {
        name,
      },
    });
  }
}
