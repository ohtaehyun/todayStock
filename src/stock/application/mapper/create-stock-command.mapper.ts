import { CreateStockCommand } from '@/stock/application/command/create-stock.command';
import { StockEntity } from '@/stock/domain/entity/stock.entity';
import { Ticker } from '@/shared/domain/vo/ticker';

export class CreateStockCommandMapper {
  static toEntity(command: CreateStockCommand): StockEntity {
    return new StockEntity(new Ticker(command.ticker));
  }
}
