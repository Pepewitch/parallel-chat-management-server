import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from '../entity/Room';
import { Repository } from 'typeorm';
import { ChatUser } from '../entity/ChatUser';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
    @InjectRepository(ChatUser)
    private readonly userRepository: Repository<ChatUser>,
  ) {}

  async getUsers(roomId: string) {
    return this.roomRepository.find({ where: roomId, relations: ['users'] });
  }

  async join(userId: string, roomId: string) {
    const exist = await this.roomRepository.findOne(roomId, {
      relations: ['users'],
    });
    if (!exist) {
      throw new Error('RoomId does not exist');
    }
    if (exist && exist.users.find(e => e.id === userId)) {
      throw new Error('Exist');
    }
    const user = await this.userRepository.findOne(userId);
    if (!user) {
      throw new Error('UserId does not exist');
    }
    exist.users.push(user);
    await this.roomRepository.save(exist);
  }

  async leave(userId: string, roomId: string) {
    const exist = await this.roomRepository.findOne(roomId, {
      relations: ['users'],
    });
    if (!exist) {
      throw new Error('RoomId does not exist');
    }
    const index = exist.users.findIndex(e => e.id === userId);
    if (index !== -1) {
      exist.users.splice(index, 1);
      this.roomRepository.save(exist);
    }
    throw new Error('UserId does not in this room');
  }
}
