import { CreateStockCommand } from '@/stock/application/command/create-stock.command';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateStockRequest {
  @IsString()
  @IsNotEmpty()
  @Length(1, 5)
  ticker: string;

  toCommand(): CreateStockCommand {
    return new CreateStockCommand(this.ticker);
  }
}
