import { FearAndGreedIndexEntity } from '@/fear-and-greed/domain/entity/fgi.entity';
import { FearAndGreedIndexMapper } from '@/fear-and-greed/domain/mapper/fgi.mapper';
import { IFearAndGreedDatabizResponse } from '@/fear-and-greed/infra/databiz/fgi-databiz.response';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class DataBizRepository {
  private readonly url: string;

  constructor(configService: ConfigService) {
    this.url = configService.getOrThrow('FEAR_AND_GREED_URL');
  }

  async findOneLatest(): Promise<FearAndGreedIndexEntity> {
    const { data } = await axios.get<IFearAndGreedDatabizResponse>(this.url, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
      },
    });
    return FearAndGreedIndexMapper.fromDatabizToEntity(data);
  }
}
