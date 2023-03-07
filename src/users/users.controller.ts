import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CreateUsersDTO } from './Dto/users.dto';

@Controller('users')
export class UsersController {
  @Get()
  @HttpCode(HttpStatus.OK)
  getUsers() {
    return {
      message: 'users',
    };
  }

  @Post('/create')
  @HttpCode(HttpStatus.OK)
  createUsers(@Body() createUsers: CreateUsersDTO) {
    return {
      message: 'guardando user',
    };
  }

  @Put('/update/:id')
  @HttpCode(HttpStatus.OK)
  updateUsers(@Param('id') id: string, @Body() createUsers: CreateUsersDTO) {
    return {
      message: 'update user',
    };
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  deleteUsers(@Param('id') id: string) {
    return {
      message: 'eliminando usuario',
    };
  }
}
