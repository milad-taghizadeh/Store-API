import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBasketDto } from './create-basket.dto';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UpdateBasketDto extends PartialType(CreateBasketDto) {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    discountId?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    product: string[];
}
