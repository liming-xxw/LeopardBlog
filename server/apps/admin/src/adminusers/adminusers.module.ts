import { Module } from '@nestjs/common';
import { ApiresultModule } from '../apiresult/apiresult.module';
import { AdminusersController } from './adminusers.controller';
import { AdminusersService } from './adminusers.service';

@Module({
  imports:[
    ApiresultModule
  ],
  controllers: [AdminusersController],
  providers: [AdminusersService]
})
export class AdminusersModule {}
