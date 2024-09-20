import { Injectable } from '@nestjs/common';
import { Product } from './../../entities/product.entity';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Bread',
      description: 'Bread of the day',
      price: 120.5,
      stock: 5,
      image: null,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id): Product {
    return this.products.find((item) => item.id === Number(id));
  }

  create(payload: any) {
    this.counterId += 1;
    const newProduct: Product = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id, payload) {
    const product: Product = this.findOne(id);
    if (product) {
      const productIndex: number = this.products.findIndex(
        (item) => item.id === Number(id),
      );
      const updatedProduct: Product = { ...product, ...payload };
      this.products[productIndex] = updatedProduct;
      return updatedProduct;
    }
    return null;
  }

  delete(id) {
    const productIndex: number = this.products.findIndex(
      (item) => item.id === Number(id),
    );
    productIndex >= 0 && delete this.products[productIndex];
  }
}
