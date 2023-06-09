import { Connection } from 'mongoose';
import { UserSchema } from '../../schemas/user.schema';
export const providers = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('users', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
