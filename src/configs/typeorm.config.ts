import { ConnectionOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmConfig = (): TypeOrmModuleOptions => {
  const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } =
    process.env;

  const databaseConfig: ConnectionOptions = {
    type: 'mysql',
    host: MYSQL_HOST,
    port: parseInt(MYSQL_PORT, 10),
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  };

  return {
    ...databaseConfig,
    synchronize: true,
    autoLoadEntities: true,
  };
};
