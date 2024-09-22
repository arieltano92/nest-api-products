import {
  Controller,
  Get,
  HttpStatus,
  Param,
  HttpCode,
  ParseIntPipe,
  Post,
  Body,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { createUserDto } from '../dtos/users.dto';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUser(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() payload: createUserDto) {
    return this.usersService.createUser(payload);
  }

  @Get(':id/orders')
  @HttpCode(HttpStatus.OK)
  getUserOrders(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserOrders(id);
  }
}
