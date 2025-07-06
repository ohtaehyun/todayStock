import { IYahooFinanceRepository } from '@/yahoo-finance/domain/repository/yahoo-finance.repository';
import { YahooFinanceRepository } from '@/yahoo-finance/infra/yahoo/yahoo-finance.repository';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: IYahooFinanceRepository,
      useClass: YahooFinanceRepository,
    },
  ],
  exports: [
    {
      provide: IYahooFinanceRepository,
      useClass: YahooFinanceRepository,
    },
  ],
})
export class YahooFinanceModule {}
