import { Injectable } from '@nestjs/common';
import { CreateRestDto } from './dto/create-rest.dto';

@Injectable()
export class RestService {
  create(createRestDto: CreateRestDto) {
    return `${createRestDto.name}`;
  }

  findAll() {
    return `This action returns all rest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rest`;
  }

  update(id: number) {
    return `This action updates a #${id} rest`;
  }

  remove(id: number) {
    return `This action removes a #${id} rest`;
  }
}
