import { Injectable } from "@nestjs/common";
import { Basket } from "@prisma/client";
import { Repository } from "src/common/interfaces/repository";
import { PrismaService } from "src/database/database.service";

@Injectable()
export class BasketRepository implements Repository<Basket>{

    constructor(
        private readonly prismaService: PrismaService
    ) {}
    
    async create(data: Omit<Basket, "id" | "createdAt" | "updatedAt">): Promise<Basket> {
        return await this.prismaService.basket.create({
            data: {
                ...data
            }
        });
    }

    async update(id: string, data: Partial<Basket>): Promise<Basket> {
        return await this.prismaService.basket.update({
            where:{
                id
            },
            data:{
                ...data
            }
        })
    }

    async findById(id: string): Promise<Basket> {
        return await this.prismaService.basket.findFirst({
            where: {
                id
            }
        })
    }

    findMany?(filters: Basket): Promise<Basket[]> {
        throw new Error("Method not implemented.");
    }
    
}