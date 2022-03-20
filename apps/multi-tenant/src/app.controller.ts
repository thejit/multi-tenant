import { Logger, Controller, Get } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    Logger.log('getHello');
    return this.appService.getHello();
  }
}
