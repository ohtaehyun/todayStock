import { IFearAndGreedRepository } from '@/fear-and-greed/domain/repository/fgi.repository';
import { DataBizRepository } from '@/fear-and-greed/infra/databiz/databiz.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateFearAndGreedService {
  constructor(
    @Inject(IFearAndGreedRepository)
    private readonly fgiRepository: IFearAndGreedRepository,
    private readonly databizRepository: DataBizRepository,
  ) {}

  async execute() {
    const fgi = await this.databizRepository.findOneLatest();

    try {
      await this.fgiRepository.findOneOrThrowByCreatedAt(fgi.createdAt);
    } catch (error) {
      await this.fgiRepository.create(fgi);
    }
  }
}
