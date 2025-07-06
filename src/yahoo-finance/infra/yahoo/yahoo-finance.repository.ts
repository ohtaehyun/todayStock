import { Ticker } from '@/shared/domain/vo/ticker';
import { IYahooFinanceRepository } from '@/yahoo-finance/domain/repository/yahoo-finance.repository';
import { Inject, Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';

@Injectable()
export class YahooFinanceRepository implements IYahooFinanceRepository {
  async isTickerValid(ticker: Ticker): Promise<boolean> {
    try {
      await yahooFinance.quoteSummary(ticker.value, { modules: ['price'] });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
