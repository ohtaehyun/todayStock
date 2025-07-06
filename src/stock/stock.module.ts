import { CreateStockService } from '@/stock/application/service/create-stock.service';
import { IStockRepository } from '@/stock/domain/repository/stock.repository';
import { StockPrismaRepository } from '@/stock/infra/prisma/stock.repository';
import { StockController } from '@/stock/presentation/stock.controller';
import { YahooFinanceModule } from '@/yahoo-finance/yahoo-finance.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [YahooFinanceModule],
  providers: [
    {
      provide: IStockRepository,
      useClass: StockPrismaRepository,
    },
    CreateStockService,
  ],
  controllers: [StockController],
})
export class StockModule {}
