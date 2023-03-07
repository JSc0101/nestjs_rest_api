import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PRODUCT } from './interfaces/product.interfaces';
import { CreateProductDTO } from './Dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<PRODUCT>,
  ) {}

  async gets(): Promise<PRODUCT[]> {
    const products = await this.productModel.find();
    return products;
  }

  async create(createProductDTO: CreateProductDTO): Promise<PRODUCT> {
    const product = new this.productModel(createProductDTO);
    return await product.save();
  }

  async update(
    productID: string,
    createProductDTO: CreateProductDTO,
  ): Promise<PRODUCT> {
    const updateProduct = await this.productModel.findByIdAndUpdate(
      productID,
      createProductDTO,
      { new: true },
    );
    return updateProduct;
  }

  async delete(productID: string): Promise<PRODUCT> {
    const deleteProduct = await this.productModel.findByIdAndDelete(productID);
    return deleteProduct;
  }

  async getById(productID: string): Promise<PRODUCT> {
    const product = await this.productModel.findById(productID);
    return product;
  }
}
