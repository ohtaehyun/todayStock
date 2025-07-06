import { StockEntity } from '@/stock/domain/entity/stock.entity';
import { IStockRepository } from '@/stock/domain/repository/stock.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateStockService {
  constructor(
    @Inject(IStockRepository)
    private readonly stockRepository: IStockRepository,
  ) {}

  async execute(stock: StockEntity): Promise<StockEntity> {
    return await this.stockRepository.save(stock);
  }
}
