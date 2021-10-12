import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { Good } from './entities/good.entity';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Good)
    private readonly goodsRepository: Repository<Good>,
  ) {}

  create(createGoodDto: CreateGoodDto) {
    const goods = new Good();

    goods.name = createGoodDto.name;
    goods.desc = createGoodDto.desc;
    goods.price = createGoodDto.price;
    goods.img = createGoodDto.img;

    return this.goodsRepository.save(goods);
  }

  findAll() {
    return this.goodsRepository.find();
  }

  findOne(id: number) {
    return this.goodsRepository.findOne(id);
  }

  async update(id: number, updateGoodDto: UpdateGoodDto) {
    return this.goodsRepository.update({ id }, updateGoodDto);
  }

  remove(id: number) {
    return this.goodsRepository.update({ id }, { isDeleted: 1 });
  }
}
