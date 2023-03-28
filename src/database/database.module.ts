import {Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KumohTime } from './kumoh-time.entity';
import { KumohTimeRepository } from './kumoh-time.repository';

@Global()
@Module({
    // imports: [
    //     TypeOrmModule.forFeature([KumohTime])
    // ],
    providers: [KumohTimeRepository],
    exports: [KumohTimeRepository]
})
export class DatabaseModule {}
