import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { Repository } from 'src/common/interfaces/repository';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class CategoryRepository implements Repository<Category> {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: Category): Promise<Category> {
    return await this.prismaService.category.create({
      data: {
        ...data,
      },
    });
  }

  async update(id: number, data: Category): Promise<Category> {
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
 
}
