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
} from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';

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

  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('productId') productId: number): any {
    return this.productsService.findOne(productId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProduct(@Body() payload: any): any {
    console.log('Creating product', payload);
    return this.productsService.create(payload);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  updateProduct(@Param('id') id: string, @Body() payload: any): any {
    console.log(`Updating product ${id}`, payload);
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteProduct(@Param('id') id: string): any {
    console.log(`Deleting product ${id}`);
    this.productsService.delete(id);
    return {
      message: `Product ${id} deleted successfully!`,
    };
  }
}
