import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { ProductsModule } from 'src/products/products.module';
import { UsersService } from './services/users.service';

@Module({
  imports: [ProductsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
