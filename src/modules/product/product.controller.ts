import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums/swagger.consumes.enum';

@Controller('product')
@ApiTags("Product")
export class ProductController {

  constructor(private readonly productService: ProductService) {}

  @Post('new')
  @ApiConsumes(SwaggerConsumes.urlEncoded, SwaggerConsumes.Json)
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @Get('get')
  @ApiConsumes(SwaggerConsumes.urlEncoded, SwaggerConsumes.Json)
  async findAll() {
    return await this.productService.findAll();
  }

  @Get('get/:id')
  @ApiConsumes(SwaggerConsumes.urlEncoded, SwaggerConsumes.Json)
  async findById(@Param('id') id: string) {
    return await this.productService.findProductByID(id);
  }

  @Get('get/code/:code')
  @ApiConsumes(SwaggerConsumes.urlEncoded, SwaggerConsumes.Json)
  async findByCode(@Param('code') code: string) {
    return await this.productService.findProductByCode(code);
  }

  @Patch('update/:id')
  @ApiConsumes(SwaggerConsumes.urlEncoded, SwaggerConsumes.Json)
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete('delete/:id')
  @ApiConsumes(SwaggerConsumes.urlEncoded, SwaggerConsumes.Json)
  async remove(@Param('id') id: string) {
    return await this.productService.remove(id);
  }
}
