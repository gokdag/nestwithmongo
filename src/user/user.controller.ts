import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUserWithId(@Query('userId') userId: string) {
    return this.userService.getUserWithId(userId);
  }

  @Get('list')
  getUserList() {
    return this.userService.getAllUserList();
  }
}
