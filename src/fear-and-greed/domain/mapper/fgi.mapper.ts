import { FearGreedRating } from '@/fear-and-greed/domain/constant/fgi-rating.constant';
import { FearAndGreedIndexEntity } from '@/fear-and-greed/domain/entity/fgi.entity';
import { FearAndGreedScore } from '@/fear-and-greed/domain/vo/fgi-score.vo';
import { IFearAndGreedDatabizResponse } from '@/fear-and-greed/infra/databiz/fgi-databiz.response';
import { FearAndGreedIndex } from '@prisma/client';

export class FearAndGreedIndexMapper {
  static fromPrismaToEntity(fg: FearAndGreedIndex): FearAndGreedIndexEntity {
    return new FearAndGreedIndexEntity(
      fg.rating as FearGreedRating,
      new FearAndGreedScore(fg.score),
      new FearAndGreedScore(fg.marketMomentum),
      new FearAndGreedScore(fg.stockPriceStrength),
      new FearAndGreedScore(fg.stockPriceBreadth),
      new FearAndGreedScore(fg.putCallOptions),
      new FearAndGreedScore(fg.marketVolatility),
      new FearAndGreedScore(fg.junkBondDemand),
      new FearAndGreedScore(fg.safeHavenDemand),
      fg.createdAt,
      fg.id,
    );
  }

  static fromDatabizToEntity(fg: IFearAndGreedDatabizResponse) {
    return new FearAndGreedIndexEntity(
      String(fg.fear_and_greed.rating)
        .replaceAll(' ', '_')
        .toUpperCase() as FearGreedRating,
      new FearAndGreedScore(fg.fear_and_greed.score),
      new FearAndGreedScore(fg.market_momentum_sp500.score),
      new FearAndGreedScore(fg.stock_price_strength.score),
      new FearAndGreedScore(fg.stock_price_breadth.score),
      new FearAndGreedScore(fg.put_call_options.score),
      new FearAndGreedScore(fg.market_volatility_vix.score),
      new FearAndGreedScore(fg.junk_bond_demand.score),
      new FearAndGreedScore(fg.safe_haven_demand.score),
      new Date(fg.fear_and_greed.timestamp),
      null,
    );
  }
}
