import { FearGreedRating } from '@/fear-and-greed/domain/constant/fgi-rating.constant';
import { FearAndGreedScore } from '@/fear-and-greed/domain/vo/fgi-score.vo';

export class FearAndGreedIndexEntity {
  constructor(
    public readonly rating: FearGreedRating,
    public readonly score: FearAndGreedScore,
    public readonly marketMomentum: FearAndGreedScore,
    public readonly stockPriceStrength: FearAndGreedScore,
    public readonly stockPriceBreadth: FearAndGreedScore,
    public readonly putCallOptions: FearAndGreedScore,
    public readonly marketVolatility: FearAndGreedScore,
    public readonly junkBondDemand: FearAndGreedScore,
    public readonly safeHavenDemand: FearAndGreedScore,
    public readonly createdAt: Date = new Date(),
    public readonly id: number | null,
  ) {}
}
