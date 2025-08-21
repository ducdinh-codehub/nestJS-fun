import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { authProviders } from './auth.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, ...authProviders],
  exports: [AuthService],
})
export class AuthModule {}
