import {
  Controller,
  Get,
  Param,
  Res,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { Response } from 'express';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}
  @Get(':roomId')
  async getUsersInRoom(@Param('roomId') roomId: string, @Res() res: Response) {
    try {
      const users = await this.roomService.getUsers(roomId);
      return res.status(200).send(users);
    } catch (error) {
      return res.status(404).send({ message: error.message });
    }
  }
  @Post(':roomId')
  async joinRoom(
    @Body('user') userId: string,
    @Param('roomId') roomId: string,
    @Res() res: Response,
  ) {
    try {
      await this.roomService.join(userId, roomId);
      return res.status(201).send({});
    } catch (error) {
      if (error.message === 'Exist') {
        return res.status(200).send({});
      } else {
        return res.status(400).send({ message: error.message });
      }
    }
  }
  @Put(':roomId')
  async joinRoomWithPut(
    @Body('user') userId: string,
    @Param('roomId') roomId: string,
    @Res() res: Response,
  ) {
    try {
      await this.roomService.join(userId, roomId);
      return res.status(201).send({});
    } catch (error) {
      if (error.message === 'Exist') {
        return res.status(200).send({});
      } else {
        return res.status(400).send({ message: error.messgae });
      }
    }
  }
  @Delete(':roomId')
  async leaveRoom(
    @Body('user') userId: string,
    @Param('roomId') roomId: string,
    @Res() res: Response,
  ) {
    try {
      await this.roomService.leave(userId, roomId);
      return res.status(200).send({ message: `${userId} leaves the room` });
    } catch (error) {
      return res.status(404).send({ message: 'User id is not found' });
    }
  }
}
