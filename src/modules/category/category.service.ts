import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async findOne(id: number) {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new NotFoundException(CategoryMessages.CATEGORY_NOT_FOUND);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id);
    const checkExist = await this.checkCategoryExist(updateCategoryDto.name)
    if (checkExist) {
      throw new ForbiddenException(CategoryMessages.CATEGORY_IS_ALREADY_EXIST)
    }
    if (!category)
      throw new NotFoundException(CategoryMessages.CATEGORY_NOT_FOUND);
    return await this.categoryRepository.update(id, {
      name: updateCategoryDto.name,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }

  async checkCategoryExist(name: string) {
    const category = await this.categoryRepository.findByName(name);
    return category
  }
}
