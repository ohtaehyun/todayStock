import { DomainException } from '@/shared/domain/error/domain.exception';
import { TICKER_ERROR_CODE } from '@/shared/domain/error/ticker.error';

export class Ticker {
  private readonly _value: string;
  constructor(ticker: string) {
    if (!/^[A-Z]{1,6}$/.test(ticker)) {
      throw new DomainException(
        TICKER_ERROR_CODE.INVALID_TICKER_FORMAT,
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
