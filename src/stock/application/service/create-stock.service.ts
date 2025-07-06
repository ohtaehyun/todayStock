import { ApplicationException } from '@/shared/application/error/application.exception';
import { CreateStockCommand } from '@/stock/application/command/create-stock.command';
import { CreateStockCommandMapper } from '@/stock/application/mapper/create-stock-command.mapper';
import { StockEntity } from '@/stock/domain/entity/stock.entity';
import { STOCK_ERROR_CODE } from '@/stock/domain/error/stock-error';
import { IStockRepository } from '@/stock/domain/repository/stock.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateStockService {
  constructor(
    @Inject(IStockRepository)
    private readonly stockRepository: IStockRepository,
  ) {}

  async execute(command: CreateStockCommand): Promise<StockEntity> {
    const stock = CreateStockCommandMapper.toEntity(command);

    const exist = await this.stockRepository.findOneByTicker(stock.ticker);
    if (exist) {
      throw new ApplicationException(
        STOCK_ERROR_CODE.DUPLICATE_TICKER,
        '이미 존재하는 티커입니다.',
      );
    }
    return await this.stockRepository.save(stock);
  }
}
