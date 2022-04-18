import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index.ejs')
  async view(@Req() request: Request){
    console.log(request.route.path);
    return { title: "소개 - Storichain 스토리체인", url: request.route.path}
  }

  @Get('/login')
  @Render('login.ejs')
  async login(@Req() request: Request){
    return { title: "스토리체인 로그인", url: request.route.path}
  }

  @Get('/join')
  @Render('join.ejs')
  async join(@Req() request: Request){
    return { title: "스토리체인 회원가입", url: request.route.path}
  }
}
