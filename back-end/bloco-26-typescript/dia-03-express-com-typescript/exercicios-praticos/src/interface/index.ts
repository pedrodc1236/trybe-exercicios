export interface User {
  email: string,
  password: string
}

export interface IName extends User {
  name: string,
}

export interface UserObj extends IName {
  id?: number;
}