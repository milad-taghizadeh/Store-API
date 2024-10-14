import { Injectable } from "@nestjs/common";
import { $Enums, Product } from "@prisma/client";
import { Repository } from "src/common/interfaces/repository";
import { PrismaService } from "src/database/database.service";

@Injectable()
export class ProductRepository implements Repository<Product> {

    constructor(
        private readonly prismaService: PrismaService
    ) {}
    
    async create(data: Omit<Product, "id" | "createdAt" | "updatedAt">): Promise<Product> {
        return await this.prismaService.product.create({
            data: {
                ...data
            }
        });
    }

    async update(id: string, data: Partial<Product>): Promise<Product> {
        return await this.prismaService.product.update({
            where:{
                id
            },
            data:{
                ...data
            }
        })
    }

    async findById(id: string): Promise<Product> {
        return await this.prismaService.product.findFirst({
            where: {
                id
            }
        })
    }

    async findMany(data: Partial<Product>): Promise<Product[]> {
        return await this.prismaService.product.findMany({
            where: {
                categoryId: data.categoryId
            }
        })
    }
}