import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/database/database.service';
import { ProductRepository } from './product.repository';
import { CategoryRepository } from '../category/category.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService, ProductRepository, CategoryRepository],
})
export class ProductModule {}
