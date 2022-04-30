import { User } from '../user/entities/user.entity';

export type SignUser = Omit<User, 'id' | 'createDate' | 'updateDate'>;

export enum IdentityTypeEnum {
  GitHub = 'github',
}
