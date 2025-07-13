import { StockEntity } from '@/stock/domain/entity/stock.entity';

export class TopStockEntity {
  constructor(
    public readonly tradeDate: Date,
    public readonly rank: number,
    public readonly marketCap: number,
    public readonly startPrice: number,
    public readonly closePrice: number,
    public readonly createdAt: Date = new Date(),
    public readonly stock: StockEntity,
    public readonly id: number | null,
  ) {}
}
