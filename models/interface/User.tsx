export interface IUser {
  id?: number;
  username?: string;
  email: string;
  password?: string;
  createdDate?: string | null;
  role?: eRole;
}

export enum eRole {
  admin = 1,
  content = 2,
  read = 3,
}

export type AuthState = {
  Auth: IUser | null;
};

export type AuthAction = {
  type: string;
  Auth: IUser;
};
