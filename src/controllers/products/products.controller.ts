import {
  Controller,
  Param,
  Query,
  Get,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';
import { createProductDto, updateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('id', ParseIntPipe) id: number): any {
    return this.productsService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProduct(@Body() payload: createProductDto): any {
    console.log('Creating product', payload);
    return this.productsService.create(payload);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateProductDto,
  ): any {
    console.log(`Updating product ${id}`, payload);
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteProduct(@Param('id', ParseIntPipe) id: number): any {
    console.log(`Deleting product ${id}`);
    this.productsService.delete(id);
    return {
      message: `Product ${id} deleted successfully!`,
    };
  }
}
