import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './category.repository';
import { CategoryMessages } from './messages/category.messages';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async newCategory(createCategoryDto: CreateCategoryDto) {
    const isCategoryExist = await this.categoryRepository.findByName(
      createCategoryDto.name,
    );
    if (isCategoryExist) {
      throw new ForbiddenException(CategoryMessages.CATEGORY_IS_ALREADY_EXIST);
    }
    return await this.categoryRepository.create({
      name: createCategoryDto.name,
    });
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
