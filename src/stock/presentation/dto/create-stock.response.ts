import { InvalidResponseException } from '@/shared/presentation/error/invalid-response-model.exception';
import { StockEntity } from '@/stock/domain/entity/stock.entity';

export class CreateStockResponse {
  public readonly id: number;

  constructor(stock: StockEntity) {
    if (!stock.hasId()) {
      throw new InvalidResponseException('StockEntity에 id가 없습니다.');
    }

    this.id = stock.id;
  }
}
