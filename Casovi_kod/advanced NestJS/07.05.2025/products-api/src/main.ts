import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // ako ima nesto so ne treba go dava kako greska
      transformOptions: { exposeUnsetFields: false }, // ova sluzi ako e nesto falsy vrednsot gi brisi i gi dodava samo tie so ima vrednost
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('Api for managing products in a chinese warehouse')
    .setVersion("1.0")
    .addTag("Products")
    .build();
  const documentFactory = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup("api", app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
