import { StockEntity } from '@/stock/domain/entity/stock.entity';
import { Ticker } from '@/shared/domain/vo/ticker';

export const IStockRepository = Symbol('IStockRepository');

export interface IStockRepository {
  save(stock: StockEntity): Promise<StockEntity>;
  findOneByTicker(ticker: Ticker): Promise<StockEntity | null>;
}
