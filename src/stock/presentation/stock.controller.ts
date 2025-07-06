import { CreateStockService } from '@/stock/application/service/create-stock.service';
import { CreateStockRequest } from '@/stock/presentation/dto/create-stock.request';
import { CreateStockResponse } from '@/stock/presentation/dto/create-stock.response';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('stock')
export class StockController {
  constructor(private readonly createStockService: CreateStockService) {}

  @Post()
  async createStock(@Body() createRequest: CreateStockRequest) {
    const command = createRequest.toCommand();
    const stock = await this.createStockService.execute(command);
    return new CreateStockResponse(stock);
  }
}
