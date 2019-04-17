import { Entity, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Room } from './Room';

@Entity()
export class ChatUser {
  @PrimaryColumn()
  id: string;

  @ManyToMany(() => Room, room => room.users, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable()
  rooms: Room[];
}
