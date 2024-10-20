import { ApiProperty } from "@nestjs/swagger";
import { productStatus } from "@prisma/client";
import { IsString, IsNotEmpty, Length, IsNumber } from "class-validator";

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(0, 50)
    productName: string;  

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(4, 10)
    productCode: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    price: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    finalPrice: string;

    @ApiProperty()
    @IsString()
    detail: string[];

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    color: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    images: string[];

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cover: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    qty: number;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(0, 100)
    description: string;
    
    @ApiProperty({enum: productStatus})
    @IsString()
    @IsNotEmpty()
    @Length(0, 100)
    status: productStatus;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    categoryId: number;
}
