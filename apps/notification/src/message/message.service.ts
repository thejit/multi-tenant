import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MessageSchema, MessageSchemaDocument } from './message.schema';
import { MessageDto } from './message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(MessageSchema.name)
    private readonly messageModel: Model<MessageSchemaDocument>,
  ) {}
  async findAll() {
    return await this.messageModel.find().exec();
  }
  async create(messageDto: MessageDto) {
    return await this.messageModel.create(messageDto);
  }
}
