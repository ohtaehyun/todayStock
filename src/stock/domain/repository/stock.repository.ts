import { StockEntity } from '@/stock/domain/entity/stock.entity';

export const IStockRepository = Symbol('IStockRepository');

export interface IStockRepository {
  save(stock: StockEntity): Promise<StockEntity>;
}
