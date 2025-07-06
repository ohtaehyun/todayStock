import { DomainException } from '@/shared/domain/error/domain.exception';
import { STOCK_ERROR_CODE } from '@/stock/domain/error/stock-error';

export class Ticker {
  private readonly _value: string;
  constructor(ticker: string) {
    if (!/^[A-Z]{1,6}$/.test(ticker)) {
      throw new DomainException(
        STOCK_ERROR_CODE.INVALID_TICKER,
        `잘못된 티커입니다. ticker: ${ticker}`,
      );
    }
    this._value = ticker.toUpperCase();
  }

  get value(): string {
    return this._value;
  }

  toString(): string {
    return this._value;
  }
}
