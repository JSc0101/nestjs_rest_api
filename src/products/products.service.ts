import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PRODUCT } from './interfaces/product.interfaces';
import { CreateProductDTO } from './Dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<PRODUCT>,
  ) {}
}
