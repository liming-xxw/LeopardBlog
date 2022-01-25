import { CommonModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ApiresultModule } from 'apps/admin/src/apiresult/apiresult.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [BlogsModule, ApiresultModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
