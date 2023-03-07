import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { ProductController } from './products/product.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/products'),
  ],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
