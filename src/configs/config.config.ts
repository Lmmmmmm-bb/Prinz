import { ConfigModuleOptions } from '@nestjs/config';

export const configModuleOptions: ConfigModuleOptions = {
  envFilePath: ['.env', '.env.local'],
};
