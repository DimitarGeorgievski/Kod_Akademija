import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

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
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
