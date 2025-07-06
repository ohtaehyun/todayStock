import { ITopStockRepository } from '@/top-stock/domain/repository/top-stock.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TopStockPrismaRepository implements ITopStockRepository {}
