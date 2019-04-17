import { Entity, PrimaryColumn, ManyToMany } from 'typeorm';
import { ChatUser } from './ChatUser';

@Entity()
export class Room {
  @PrimaryColumn()
  id: string;

  @ManyToMany(() => ChatUser, user => user.rooms, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  users: ChatUser[];
}
