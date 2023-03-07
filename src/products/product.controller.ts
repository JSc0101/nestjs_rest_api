import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDTO } from './Dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async getProduct(@Res() res) {
    const products = await this.productService.gets();
    return res.status(HttpStatus.OK).json({
      message: 'recived',
      products,
    });
  }

  @Post('/create')
  async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const product = await this.productService.create(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'recived',
      product,
    });
  }

  @Get('/:productID')
  async getProductById(@Res() res, @Param('productID') id: string) {
    const product = await this.productService.getById(id);
    if (!product) throw new NotFoundException('No existe el product');
    res.status(HttpStatus.OK).json({
      message: 'recived',
      product,
    });
  }

  @Delete('/delete/:productID')
  async deleteProduct(@Res() res, @Param('productID') id: string) {
    const product = await this.productService.delete(id);
    if (!product) throw new NotFoundException('No existe el product');
    res.status(HttpStatus.OK).json({
      message: 'recived',
      product,
    });
  }

  @Put('/update/:productID')
  async updateProduct(
    @Res() res,
    @Param('productID') productID: string,
    @Body() createProduct: CreateProductDTO,
  ) {
    const product = await this.productService.update(productID, createProduct);
    if (!product) throw new NotFoundException('No existe el product');
    res.status(HttpStatus.OK).json({
      message: 'recived',
      product,
    });
  }
}
