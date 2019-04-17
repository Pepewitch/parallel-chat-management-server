import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomController } from './room/room.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { RoomService } from './room/room.service';
import { Room } from './entity/Room';
import { ChatUser } from './entity/ChatUser';
import { AllroomsService } from './allrooms/allrooms.service';
import { AllroomsController } from './allrooms/allrooms.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Room, ChatUser]), TypeOrmModule.forRoot()],
  controllers: [
    AppController,
    RoomController,
    UsersController,
    AllroomsController,
  ],
  providers: [AppService, UsersService, RoomService, AllroomsService],
})
export class AppModule {}
