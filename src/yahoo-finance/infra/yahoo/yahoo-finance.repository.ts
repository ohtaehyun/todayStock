import { Ticker } from '@/shared/domain/vo/ticker';
import { IYahooFinanceRepository } from '@/yahoo-finance/domain/repository/yahoo-finance.repository';
import { Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';

@Injectable()
export class YahooFinanceRepository implements IYahooFinanceRepository {
  async isTickerValid(ticker: Ticker): Promise<boolean> {
    try {
      await yahooFinance.quoteSummary(ticker.value, { modules: ['price'] });
      return true;
    } catch (error) {
      this.handleError(error);
      return false;
    }
  }

  private handleError(error: any) {
    if (error instanceof yahooFinance.errors.FailedYahooValidationError) {
      // See the validation docs for examples of how to handle this
      // error.result will be a partially validated / coerced result.
      return;
    } else if (error instanceof yahooFinance.errors.HTTPError) {
      console.error(`Skipping yf HTTPError: [${error.name}] ${error.message}`);
      throw error;
    } else {
      console.warn(`Skipping yf Error: [${error.name}] ${error.message}`);
      return;
    }
  }
}
