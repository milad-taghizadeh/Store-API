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

  async findAll() {
    return await this.categoryRepository.findAll()
  };

  async findOne(id: number) {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new NotFoundException(CategoryMessages.CATEGORY_NOT_FOUND);
    }
    return category;
  }

  async findByName(name: string) {
    const category = await this.categoryRepository.findByName(name);
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id);
    const checkExist = await this.findByName(updateCategoryDto.name);
    if (checkExist) {
      throw new ForbiddenException(CategoryMessages.CATEGORY_IS_ALREADY_EXIST);
    }
    if (!category)
      throw new NotFoundException(CategoryMessages.CATEGORY_NOT_FOUND);
    return await this.categoryRepository.update(id, {
      name: updateCategoryDto.name,
    });
  }

  async remove(id: number) {
    const isCategoryExists = await this.findOne(id);
    if (!isCategoryExists)
      throw new NotFoundException(CategoryMessages.CATEGORY_NOT_FOUND);
    return await this.categoryRepository.deleteById(id)
  }
}
