import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
//import { PartialType } from '@nestjs/mapped-types'; if we are not using swagger for documentation we import Partial types from mapped-types
import { PartialType, ApiProperty } from '@nestjs/swagger';

// DTO (Data transfer object) for products. This validations only applies for developer time
export class createProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Product name' })
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Product description' })
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'Product price' })
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'Product stock' })
  readonly stock: number;
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ description: 'Product image' })
  readonly image: string;
}

//Use PartialType to reuse createProduct schema with optional values
export class updateProductDto extends PartialType(createProductDto) {}
