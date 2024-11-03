import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBasketDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    userId: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    product: string[];
}
