export class UserLogin {
  constructor(
    email: string,
    password: string
  ){}
}

export interface IToken {
  access_token: string
}

export interface IUser {
  user: string;
  acesso: string[]
}
