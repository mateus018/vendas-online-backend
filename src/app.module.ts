import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { StateEntity } from './state/entities/state.entity';
import { CityEntity } from './city/entities/city.entity';
import { CacheModule } from './cache/cache.module';
import { AddressEntity } from './address/entities/address.entity';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [ConfigModule.forRoot({
  envFilePath: ['.env.development.local'],
}),
  TypeOrmModule.forRoot({
    type:'postgres',
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    entities: [UserEntity, StateEntity,CityEntity,AddressEntity],
    migrations:[`${__dirname}/migration/{.ts,*.js}`],
    migrationsRun: true,
    synchronize: false

  })
    ,UserModule, StateModule, CityModule, AddressModule, CacheModule, AuthModule, JwtModule
  ],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard,
  },],
})
export class AppModule {}
