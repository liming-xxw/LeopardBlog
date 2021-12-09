import { Module } from '@nestjs/common';
import { ApiresultModule } from '../apiresult/apiresult.module';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';

@Module({
  imports: [ApiresultModule],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
