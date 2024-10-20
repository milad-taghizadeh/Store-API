import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';
import { CreateProductMessage, PublicProductMessage, UpdateProductMessage } from './messages/product.messages';
import { CategoryRepository } from '../category/category.repository';

@Injectable()
export class ProductService {

  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository
) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productRepository.findByCode(createProductDto.productCode)
    const category = await this.categoryRepository.findById(createProductDto.categoryId)
    if (product) {
      throw new BadRequestException(CreateProductMessage.ALREADY_EXISTS);
    }
    if (!category) throw new NotFoundException(CreateProductMessage.NOT_FOUND_CATEGORY)
    return await this.productRepository.create(createProductDto);
  }

  async findAll() {
    return this.productRepository.findAll()
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    // check code for updated product
    const product = await this.findProductByID(id)
    if (updateProductDto.productCode && product.productCode != updateProductDto.productCode){
      const checkProductCode = await this.productRepository.findByCode(updateProductDto.productCode)
      if (checkProductCode) {
        throw new BadRequestException(UpdateProductMessage.ALREADY_EXISTS)
      }
    }

    // check category
    if (updateProductDto.categoryId)  {
      const category = await this.categoryRepository.findById(updateProductDto.categoryId)
      if (!category) throw new NotFoundException(CreateProductMessage.NOT_FOUND_CATEGORY)
      }
    
    return await this.productRepository.update(id, updateProductDto)
  }

  async remove(id: string) {
    const product = await this.findProductByID(id)
    // if (!product) {
    //   throw new NotFoundException(PublicProductMessage.NOT_FOUND_ID);
    // }
    return await this.productRepository.deleteById(product.id);
  }

  async findProductByCode(productCode: string) {
    const product = await this.productRepository.findByCode(productCode);
    if (!product) {
      throw new NotFoundException(PublicProductMessage.NOT_FOUND_CODE);
    }
    return product;
  }

  async findProductByID(productID: string) {
    const product = await this.productRepository.findById(productID);
    if (!product) {
      throw new NotFoundException(PublicProductMessage.NOT_FOUND_ID);
    }
    return product;
  }
}
