import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import ProductsModule from './products/products.module';

@Module({
  imports: [ProductsModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
