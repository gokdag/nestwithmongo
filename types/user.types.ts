import { UserDocument } from '../schemas/user.schema';

export interface getUserListResponse {
  status: boolean;
  data: UserDocument[] | null;
  error: string | null;
}

export interface getUserResponse {
  status: boolean;
  data: UserDocument | null;
  error: string | null;
}
