import { ConnectionOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'putovanja',
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  ...databaseConfig,
  synchronize: true,
  autoLoadEntities: true,
};
