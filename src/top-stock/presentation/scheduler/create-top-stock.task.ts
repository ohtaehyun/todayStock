import { CreateTopStockService } from '@/top-stock/application/service/create-top-stock.service';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CreateTopStockTask {
  constructor(private readonly createTopStockService: CreateTopStockService) {}

  @Cron('* * * * * *')
  async handleCron() {
    // console.log('?');
  }
}
