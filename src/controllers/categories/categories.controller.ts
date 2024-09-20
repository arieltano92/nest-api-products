import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getProductByCategory(
    @Param('productId') productId: string,
    @Param('categoryId') categoryId: string,
  ): string {
    return `Product ${productId} Category ${categoryId}`;
  }
}
