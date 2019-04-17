import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from '../entity/Room';
import { Repository } from 'typeorm';

@Injectable()
export class AllroomsService {
  constructor(
    @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
  ) {}

  async find() {
    const rooms = await this.roomRepository.find();
    return rooms.map(room => room.id);
  }

  async create(id: string) {
    const exist = await this.roomRepository.findOne(id);
    if (exist) {
      throw new Error('ROOM_ID already exists');
    }
    const room = new Room();
    room.id = id;
    return await this.roomRepository.save(room);
  }

  async delete(id: string) {
    const exist = await this.roomRepository.findOne(id);
    if (!exist) {
      throw new Error('Room id is not found');
    }
    await this.roomRepository.delete(id);
  }
}
