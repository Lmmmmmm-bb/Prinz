import { DocumentBuilder } from '@nestjs/swagger';

const MaloGithubAddress = 'https://github.com/Lmmmmmm-bb/Malo-Putovanja';
const MaloGithubLicenseAddress =
  'https://github.com/Lmmmmmm-bb/Prinz/blob/main/LICENSE';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Malo Putovanja Api 接口文档')
  .setDescription(`Malo Putovanja git address: ${MaloGithubAddress}`)
  .setLicense('Prinz use MIT LICENSE', MaloGithubLicenseAddress)
  .setVersion('0.0.1')
  .addBearerAuth()
  .build();
