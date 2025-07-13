import { FearAndGreedIndexEntity } from '@/fear-and-greed/domain/entity/fgi.entity';
export const IFearAndGreedRepository = Symbol('IFearAndGreedRepository');

export interface IFearAndGreedRepository {
  create(fg: FearAndGreedIndexEntity): Promise<FearAndGreedIndexEntity>;
  findOneOrThrowByCreatedAt(createdAt: Date): Promise<FearAndGreedIndexEntity>;
}
