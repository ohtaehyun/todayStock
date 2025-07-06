import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { PrismaModule } from '@/prisma/prisma.module';
import { StockModule } from '@/stock/stock.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { YahooFinanceModule } from './yahoo-finance/yahoo-finance.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, StockModule, YahooFinanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
