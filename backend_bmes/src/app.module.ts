import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './shared/config.service';
import { SharedModule } from './shared.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (config: ConfigService) => config.typeOrmConfig,
      inject: [ConfigService],
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
