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
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { UsersService } from '../services/users.service';
import { createUserDto } from '../dtos/users.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  @ApiOperation({summary: 'Get User by id'})
  @HttpCode(HttpStatus.OK)
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUser(id);
  }

  @Post()
  @ApiOperation({summary: 'Create user'})
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() payload: createUserDto) {
    return this.usersService.createUser(payload);
  }

  @Get(':id/orders')
  @ApiOperation({summary: 'Get user orders'})
  @HttpCode(HttpStatus.OK)
  getUserOrders(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserOrders(id);
  }
}
