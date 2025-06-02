import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory(ConfigService: ConfigService) {
                return {
                    type: "postgres",
                    host: ConfigService.get("DB_HOST"),
                    port: ConfigService.get("DB_PORT"),
                    username: ConfigService.get("DB_USER"),
                    password: ConfigService.get("DB_PASS"),
                    database: ConfigService.get("DB_NAME"),
                    synchronize: false,
                    autoLoadEntities: true,
                }
            },
        })
    ]
})
export class DatabaseModule {}
