import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { providers } from '../dto/providers';
import { DatabaseModule } from '../dto/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...providers],
})
export class UserModule {}
