/*
https://docs.nestjs.com/modules
*/
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Roles } from './entity/roles.entity';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Roles])],
    controllers: [RolesController,],
    providers: [RolesService,],
})
export class RolesModule { }
