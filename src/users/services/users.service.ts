import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { ProductsService } from 'src/products/services/products.service';

@Injectable()
export class UsersService {
  constructor(private productsService: ProductsService) {}

  private counter = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'Jhon@gmail.com',
      password: '1234',
      role: 'admin',
    },
  ];

  getUser(id): User {
    const user: User = this.users.find((item) => item.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  createUser(userData): User {
    this.counter += 1;
    const newUser: User = {
      id: this.counter,
      ...userData,
    };
    this.users.push(newUser);
    return newUser;
  }

  getUserOrders(id) {
    const user: User = this.getUser(id);
    return {
      date: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }
}
