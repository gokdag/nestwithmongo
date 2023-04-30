import { Module } from '@nestjs/common';
import { databaseProviders } from './mongo.connection';
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
