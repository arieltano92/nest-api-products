import { Controller, Param, Query, Get, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Products with limit ${limit} and offset ${offset} and brand ${brand}`,
    };
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string): any {
    return { message: `Product ${productId}` };
  }

  @Post()
  createProduct(@Body() payload: any): any {
    console.log('Creating product', payload);
    return {
      payload,
      message: 'Product created successfully!',
    };
  }

  @Put(':id')
  updateProduct(@Param('id') id : string ,@Body() payload: any): any {
    console.log(`Updating product ${id}`, payload);
    return {
      id,
      payload,
      message: 'Product updated successfully!',
    };
  }

  @Delete(':id')
  deleteProduct(@Param('id') id : string): any {
    console.log(`Deleting product ${id}`);
    return {
      id,
      message: 'Product deleted successfully!',
    };
  }
}
