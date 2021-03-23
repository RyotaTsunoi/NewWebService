import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getHello(): Record<string, string> {
    return this.appService.getHello();
  }

  @Get('/notsecure')
  getHello2(): Record<string, string> {
    return this.appService.getHello();
  }
}
