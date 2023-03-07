import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateProductDTO } from './Dto/product.dto';

@Controller('product')
export class ProductController {
  @Get()
  getProduct() {
    return {
      json: 'obteniendo datos',
    };
  }

  @Post('/create')
  createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    console.log(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'creando product',
    });
  }
}
