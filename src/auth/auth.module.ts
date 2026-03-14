import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/auth.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthHelperService } from './auth.service.helper';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/common/guards/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]),JwtModule.register({}),PassportModule.register({defaultStrategy: 'jwt'})],
  controllers: [AuthController],
  providers: [AuthService,AuthHelperService,JwtStrategy],
})
export class AuthModule {}
