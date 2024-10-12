import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { Repository } from 'src/common/interfaces/repository';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class ProductRepository implements Repository<Product> {
  constructor(private readonly prismaService: PrismaService) {}
  async create(
    data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Product> {
    return await this.prismaService.product.create({
      data: {
        ...data,
      },
    });
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    return await this.prismaService.product.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async findById(id: number): Promise<Product> {
    return await this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
  }

  async findByProductCode(productCode: string): Promise<Product> {
    return await this.prismaService.product.findUnique({
      where: {
        productCode,
      },
    });
  }

  async findByCategoryID(categoryID: number): Promise<Product[]> {
    return await this.prismaService.product.findMany({
      where: {
        categoryId: categoryID,
      },
    });
  }
}
