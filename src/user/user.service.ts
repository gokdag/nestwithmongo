import { Inject, Injectable, Param } from '@nestjs/common';
import { UserDocument } from '../../schemas/user.schema';
import { Model } from 'mongoose';
import { getUserListResponse, getUserResponse } from '../../types/user.types';
@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private userModel: Model<UserDocument>) {}
  async getAllUserList(): Promise<getUserListResponse> {
    try {
      const users = await this.userModel.find().exec();
      return { status: users?.length ? true : false, data: users, error: null };
    } catch (e) {
      return { status: false, data: null, error: null };
    }
  }

  async getUserWithId(@Param() userId: string): Promise<getUserResponse> {
    try {
      const user = await this.userModel.findById(userId);
      return { status: user ? true : false, data: user, error: null };
    } catch (e) {
      return { status: false, data: null, error: e.message };
    }
  }
}
