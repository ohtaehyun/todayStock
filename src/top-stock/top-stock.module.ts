import { ITopStockRepository } from '@/top-stock/domain/repository/top-stock.repository';
import { TopStockPrismaRepository } from '@/top-stock/infra/prisma/top-stock.repository';
import { CreateTopStockTask } from '@/top-stock/presentation/scheduler/create-top-stock.task';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    { provide: ITopStockRepository, useClass: TopStockPrismaRepository },
    CreateTopStockTask,
  ],
})
export class TopStockModule {}
