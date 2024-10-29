import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LattaInterceptor } from '@latta/nestjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const APIKey =
    '2b916d0cfe317f2ee9ff3638f989bc31b6f546390e69e9774074020e534db02118e583d75c1edaacdb87e620e9d9708540bfe62c97c4a3fe10fd39d422369768';
  // Add Latta interceptor
  app.useGlobalInterceptors(
    new LattaInterceptor(process.env.LATTA_API_KEY || APIKey, {
      // Enable detailed logging For debugging purposes, you can enable verbose logging
      verbose: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
