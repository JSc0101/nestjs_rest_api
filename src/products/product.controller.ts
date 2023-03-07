import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get()
  getProduct() {
    return {
      json: 'obteniendo datos',
    };
  }

  @Post('/create')
  createProduct(@Res() res) {
    return res.status(HttpStatus.OK).json({
      message: 'creando product',
    });
  }
}
