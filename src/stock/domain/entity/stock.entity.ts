import { Ticker } from '@/stock/domain/vo/ticker';

export class StockEntity {
  constructor(
    public readonly ticker: Ticker,
    public readonly createdAt: Date,
    public readonly id?: number,
  ) {}
}
