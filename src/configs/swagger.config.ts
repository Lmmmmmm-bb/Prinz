import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Malo Putovanja Api 接口文档')
  .setDescription(
    'Malo Putovanja git address: https://github.com/Lmmmmmm-bb/Malo-Putovanja',
  )
  .setLicense(
    'Prinz use MIT LICENSE',
    'https://github.com/Lmmmmmm-bb/Prinz/blob/main/LICENSE',
  )
  .setVersion('0.0.1')
  .build();
