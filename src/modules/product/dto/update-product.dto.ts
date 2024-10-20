import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { productStatus } from '@prisma/client';
import { IsString, IsNotEmpty, Length, IsArray } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty()
    @IsString()
    @Length(0, 50)
    productName?: string;  

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(4, 10)
    productCode?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    price?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    finalPrice?: string;

    @ApiProperty()
    @IsArray()
    detail?: string[];

    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    color?: string[];

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    images?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cover?: string;

    @ApiProperty()
    @IsNotEmpty()
    qty?: number;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(0, 100)
    description?: string;
    
    @ApiProperty({enum: productStatus})
    @IsString()
    @IsNotEmpty()
    @Length(0, 100)
    status?: productStatus;

    @ApiProperty()
    @IsNotEmpty()
    categoryId?: number;
}
