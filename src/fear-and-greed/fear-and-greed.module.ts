import { CreateFearAndGreedService } from '@/fear-and-greed/application/service/create-fgi.service';
import { IFearAndGreedRepository } from '@/fear-and-greed/domain/repository/fgi.repository';
import { DataBizRepository } from '@/fear-and-greed/infra/databiz/databiz.repository';
import { FearAndGreedPrismaRepository } from '@/fear-and-greed/infra/prisma/fgi.repository';
import { CreateFearAndGreedIndexTask } from '@/fear-and-greed/presentation/schedule/create-fgi.task';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    {
      provide: IFearAndGreedRepository,
      useClass: FearAndGreedPrismaRepository,
    },
    CreateFearAndGreedService,
    DataBizRepository,
    CreateFearAndGreedIndexTask,
  ],
  imports: [ConfigModule],
})
export class FearAndGreedModule {}
