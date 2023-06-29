import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './shared/config.service';
import { SharedModule } from './shared.module';
import { User } from './user/model/user.model';
import { UserModule } from './user/user.module';
import { AuthModule } from './authentification/user.auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (config: ConfigService) => config.typeOrmConfig,
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
  ],

  providers: [AppService],
})
export class AppModule {}
