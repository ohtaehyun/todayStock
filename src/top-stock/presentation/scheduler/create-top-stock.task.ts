import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CreateTopStockTask {
  @Cron('* * * * * *')
  async handleCron() {
    console.log('?');
  }
}
