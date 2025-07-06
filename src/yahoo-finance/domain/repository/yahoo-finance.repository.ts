import { Ticker } from '@/shared/domain/vo/ticker';

export const IYahooFinanceRepository = Symbol('IYahooFinanceRepository');

export interface IYahooFinanceRepository {
  isTickerValid(ticker: Ticker): Promise<boolean>;
}
