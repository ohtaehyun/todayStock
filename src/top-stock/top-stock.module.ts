import { ITopStockRepository } from '@/top-stock/domain/repository/top-stock.repository';
import { TopStockPrismaRepository } from '@/top-stock/infra/prisma/top-stock.repository';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    { provide: ITopStockRepository, useClass: TopStockPrismaRepository },
  ],
})
export class TopStockModule {}
