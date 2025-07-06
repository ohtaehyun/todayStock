import { PrismaService } from '@/prisma/prisma.service';
import { StockEntity } from '@/stock/domain/entity/stock.entity';
import { IStockRepository } from '@/stock/domain/repository/stock.repository';
import { Ticker } from '@/stock/domain/vo/ticker';
import { Injectable } from '@nestjs/common';
import { Stock } from '@prisma/client';

@Injectable()
export class StockPrismaRepository implements IStockRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findOneByTicker(ticker: Ticker): Promise<StockEntity | null> {
    const stock = await this.prisma.stock.findUnique({
      where: { ticker: ticker.value },
    });

    return stock ? this.toDomain(stock) : null;
  }

  async save(stock: StockEntity): Promise<StockEntity> {
    const created = await this.prisma.stock.create({
      data: {
        ticker: stock.ticker.value,
      },
    });

    return this.toDomain(created);
  }

  private toDomain(stock: Stock): StockEntity {
    return new StockEntity(new Ticker(stock.ticker), stock.createdAt, stock.id);
  }
}
