import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Menghapus property yang tidak ada di DTO
      forbidNonWhitelisted: true, // Error jika client mengirim property tambahan
      transform: true, // Otomatis mengubah tipe data (misal string ke number)
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
