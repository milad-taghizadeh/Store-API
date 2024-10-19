import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('product')
@ApiTags("Product")
export class ProductController {

  constructor(private readonly productService: ProductService) {}

  @Post('new')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get('get')
  findAll() {
    return this.productService.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
