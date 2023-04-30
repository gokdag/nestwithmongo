import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  ID: number;

  @Prop()
  FIRST_NAME: string;

  @Prop()
  LAST_NAME: string;

  @Prop()
  MAIL: string;

  @Prop()
  PASSWORD: string;

  @Prop()
  IS_ACTIVE: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
