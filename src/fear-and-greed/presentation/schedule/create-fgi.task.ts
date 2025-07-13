import { CreateFearAndGreedService } from '@/fear-and-greed/application/service/create-fgi.service';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CreateFearAndGreedIndexTask {
  constructor(private readonly createService: CreateFearAndGreedService) {}

  @Cron('0 7 * * 1-5')
  async createFgiTask() {
    await this.createService.execute();
  }
}
