import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { USER } from './interfaces/users.interfaces';
import { CreateUsersDTO } from './Dto/users.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly usersModel: Model<USER>) {}

  async gets(): Promise<USER[]> {
    const users = await this.usersModel.find();
    return users;
  }

  async create(createUserDTO: CreateUsersDTO): Promise<USER> {
    const user = new this.usersModel(createUserDTO);
    return await user.save();
  }

  async update(userID: string, createUserDTO: CreateUsersDTO): Promise<USER> {
    const userUpdate = await this.usersModel.findByIdAndUpdate(
      userID,
      createUserDTO,
      { new: true },
    );
    return userUpdate;
  }

  async delete(userID: string): Promise<USER> {
    const userDelete = await this.usersModel.findByIdAndDelete(userID);
    return userDelete;
  }

  async findById(userID: string): Promise<USER> {
    const user = await this.usersModel.findById(userID);
    return user;
  }
}
