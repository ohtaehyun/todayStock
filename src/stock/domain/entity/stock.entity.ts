import { Ticker } from '@/shared/domain/vo/ticker';

export class StockEntity {
  constructor(
    public readonly ticker: Ticker,
    public readonly createdAt: Date = new Date(),
    public readonly id?: number,
  ) {}

  hasId(): this is { id: number } & this {
    return typeof this.id === 'number' && Number.isFinite(this.id);
  }
}
