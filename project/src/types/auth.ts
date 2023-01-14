export type AuthCredentionals = {
  email: string;
  password: string;
};

export type UserInfo = {
  avatarUrl: string,
  name: string,
  id: number;
  email: string;
  token: string;
};

export enum AuthStatus {
  Authorized = 'authorized',
  Unauthorized = 'unauthorized',
  Unknown = 'Unknown'
}
export enum LogInError {

}


