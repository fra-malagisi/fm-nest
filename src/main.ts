import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('FM Nest')
    .setDescription('funny time with nest')
    .setVersion('1.0')
    .addTag('movie')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);

  const configService = app.get(ConfigService);

  const port = configService.get('PORT');
  await app.listen(port || 3001);
}
bootstrap();
