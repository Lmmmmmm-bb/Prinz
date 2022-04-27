import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Application Api Docs')
  .setDescription('Application Api Docs Description')
  .setVersion('0.1')
  .build();
