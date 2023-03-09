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
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private createUserDTO: UsersService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  async getUsers() {
    return await this.createUserDTO.gets();
  }

  @Post('/create')
  @HttpCode(HttpStatus.OK)
  async createUsers(@Body() createUsers: CreateUsersDTO) {
    return await this.createUserDTO.create(createUsers);
  }

  @Put('/update/:id')
  @HttpCode(HttpStatus.OK)
  async updateUsers(
    @Param('id') id: string,
    @Body() createUsers: CreateUsersDTO,
  ) {
    return await this.createUserDTO.update(id, createUsers);
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  deleteUsers(@Param('id') id: string) {
    return {
      message: 'eliminando usuario',
    };
  }
}
