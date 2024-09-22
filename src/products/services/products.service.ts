import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './../entities/product.entity';
import { createProductDto } from 'src/products/dtos/products.dto';

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
    const product: Product = this.products.find((item) => item.id === id);
    if (!product) throw new NotFoundException('Product doesnt exist!');
    return product;
  }

  create(payload: createProductDto) {
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
    if (!product) throw new NotFoundException('Product doesnt exist!');
    const productIndex: number = this.products.findIndex(
      (item) => item.id === id,
    );
    const updatedProduct: Product = { ...product, ...payload };
    this.products[productIndex] = updatedProduct;
    return updatedProduct;
  }

  delete(id) {
    const productIndex: number = this.products.findIndex(
      (item) => item.id === Number(id),
    );
    if (productIndex === -1)
      throw new NotFoundException('Product doesnt exist!');
    this.products.splice(productIndex, 1);
  }
}
