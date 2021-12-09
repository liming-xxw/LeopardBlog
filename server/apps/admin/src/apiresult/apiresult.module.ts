import { Global, Module } from '@nestjs/common';
import { ApiresultController } from './apiresult.controller';
import { ApiresultService } from './apiresult.service';

@Global()
@Module({
  imports:[ApiresultService],
  controllers: [ApiresultController],
  providers: [ApiresultService],
  exports:[ApiresultService]
})
export class ApiresultModule {}
