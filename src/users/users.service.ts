import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatUser } from '../entity/ChatUser';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(ChatUser)
    private readonly userRepository: Repository<ChatUser>,
  ) {}
  async find() {
    const users = await this.userRepository.find();
    return users.map(user => user.id);
  }
}
