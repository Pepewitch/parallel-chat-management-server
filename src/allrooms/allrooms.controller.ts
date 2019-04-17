import { Controller, Get, Post, Put, Delete, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { AllroomsService } from './allrooms.service';

@Controller('allrooms')
export class AllroomsController {
  constructor(private readonly allroomService: AllroomsService) {}
  @Get()
  async find() {
    return await this.allroomService.find();
  }
  @Post()
  async createRoom(@Body('id') id: string, @Res() res: Response) {
    try {
      await this.allroomService.create(id);
      return res.status(201).send({ id });
    } catch (error) {
      return res.status(404).send({ error: error.message });
    }
  }
  @Put()
  async putRoom(@Body('id') id: string, @Res() res: Response) {
    try {
      await this.allroomService.create(id);
      return res.status(201).send({ id });
    } catch (error) {
      return res.status(200).send({ id });
    }
  }
  @Delete()
  async deleteRoom(@Body('id') id: string, @Res() res: Response) {
    try {
      await this.allroomService.delete(id);
      return res.status(200).send({ id });
    } catch (error) {
      return res.status(404).send({ error: error.message });
    }
  }
}
