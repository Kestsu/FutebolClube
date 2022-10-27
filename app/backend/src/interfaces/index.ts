export interface ILogin {
  username: string;
  password: string;
}

export interface IToken {
  token: string;
}

export interface IUser {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}
