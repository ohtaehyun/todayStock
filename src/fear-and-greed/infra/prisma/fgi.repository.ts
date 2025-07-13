import { FearAndGreedIndexEntity } from '@/fear-and-greed/domain/entity/fgi.entity';
import { FearAndGreedIndexMapper } from '@/fear-and-greed/domain/mapper/fgi.mapper';
import { IFearAndGreedRepository } from '@/fear-and-greed/domain/repository/fgi.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FearAndGreedPrismaRepository implements IFearAndGreedRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findOneOrThrowByCreatedAt(
    createdAt: Date,
  ): Promise<FearAndGreedIndexEntity> {
    const fgi = await this.prisma.fearAndGreedIndex.findUniqueOrThrow({
      where: { createdAt },
    });

    return FearAndGreedIndexMapper.fromPrismaToEntity(fgi);
  }

  async create(fg: FearAndGreedIndexEntity): Promise<FearAndGreedIndexEntity> {
    const created = await this.prisma.fearAndGreedIndex.create({
      data: {
        rating: fg.rating,
        score: fg.score.value,
        marketMomentum: fg.marketMomentum.value,
        stockPriceStrength: fg.stockPriceStrength.value,
        stockPriceBreadth: fg.stockPriceBreadth.value,
        putCallOptions: fg.putCallOptions.value,
        marketVolatility: fg.marketVolatility.value,
        junkBondDemand: fg.junkBondDemand.value,
        safeHavenDemand: fg.safeHavenDemand.value,
        createdAt: fg.createdAt,
      },
    });

    return FearAndGreedIndexMapper.fromPrismaToEntity(created);
  }
}
